import { useState, useEffect } from 'react';
import user from '../../assets/image.svg';
import { FaTrashAlt } from 'react-icons/fa';
import useBusinessStore from '../../store/buisnessSrore';
import { useNavigate } from 'react-router-dom';
import { BsEye, BsEyeFill } from 'react-icons/bs';

function index() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { fetchAllBusiness, allBusiness, deleteBusiness } = useBusinessStore();

  console.log(allBusiness);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    window.location.href = '/';
  };

  useEffect(() => {
    fetchAllBusiness();
  }, []);

  const handleDelete = async (company: string) => {
    console.log(`${company} deleted`);
    try {
      const res = await deleteBusiness(company);
      if (res) fetchAllBusiness();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-6 px-[60px]">
      <div className="pt-6  flex justify-between items-center">
        <h1 className="text-[#272727] text-[24px] leading-[36px] font-medium">
          Business Evaluations
        </h1>
        <div className="flex gap-2 items-center">
          <button className="bg-[#3B37FF] text-[#ffff] font-medium px-4 py-3 rounded-[10px]">
            Generate Report
          </button>
          <button
            onClick={() => {
              navigate('/add-business');
            }}
            className="bg-[#272727] text-white font-medium px-4 py-3 rounded-[10px]"
          >
            Evaluate business
          </button>

          <div
            onClick={toggleDropdown}
            className="border-[2px] border-black rounded-full cursor-pointer"
          >
            <img className="p-2" src={user} alt="" />
          </div>
          {dropdownOpen && (
            <div className="absolute right-10 top-[70px] mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 text-start">
        <h2 className="text-[26px] text-[#2B3674] leading-[32px] font-bold">
          Comparison Results
        </h2>
      </div>
      <div className="mt-[16px] grid grid-cols-6 gap-4">
        <div className="col-span-1 border min-h-[620px] px-[14px] py-4 rounded-[10px] shadow">
          <h3 className="text-[#3B37FF] text-[16px] font-medium leading-[25px] h-[100px]">
            Businesses chosen for comparison
          </h3>
          <div className="flex flex-col gap-4 text-[#2B3674] font-medium">
            {allBusiness?.map((company: any, index: number) => (
              <div key={index} className="flex items-center justify-between">
                <h1
                  className="hover:text-blue-600 underline cursor-pointer"
                  onClick={() => navigate(`/dashboard/${company?.data?._id}`)}
                >
                  {company?.data?.business_name}
                </h1>
                <div className="flex items-center gap-2">
                  <FaTrashAlt
                    className="cursor-pointer text-[#3B37FF] hover:text-[#3B37FF]/60"
                    onClick={() => handleDelete(company?.data?._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5 border p-2 rounded-[10px] shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse border border-gray-300">
              <thead className="bg-gray-100 h-[100px]">
                <tr className="text-[#A3AED0] text-[14px] leading-[18px]">
                  <th className="px-4 py-2 border border-gray-300">
                    Return on investment (ROI)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Debt Service Coverage Ratio (DSCR)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Net Profit Margins (%)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Break-even point (x times)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Payback Period (yrs)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Equity Multiple (x times)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    SDE Multiple (x times)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Gross Sales Multiple (x times)
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Yearly Debt Payment
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Cashflow after debt service
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#2B3674] text-[14px] leading-[24px] font-semibold">
                {allBusiness?.map((row: any, index: number) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.roi}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.dscr}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.net_profit_margin}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.break_even_revenue}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.payback_period}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.equity_multiple}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.sde_multiple}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.gross_profit_margin}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.yearly_debt_payments}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {row?.metrics?.cash_flow_after_purchase}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
