import { useState } from 'react';
import useBusinessStore from '../../store/buisnessSrore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function AddBusiness() {
  const [businessData, setBusinessData] = useState({
    business_name: '',
    business_listing_price: '',
    business_gross_revenue: '',
    business_cash_flow: '',
    business_notes: '',
    loan_sba_amount: '',
    loan_sba_rate: '',
    loan_sba_term: '',
    loan_seller_amount: '',
    loan_seller_rate: '',
    loan_seller_term: '',
    loan_down_payment: '',
    desired_owner_salary: '',
    additional_startup_capital: '',
    additional_capital_expenses: '',
    expected_annual_growth_rate: '',
  });

  const navigate = useNavigate();
  const { addBusiness, isLoading } = useBusinessStore();

  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setBusinessData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await addBusiness(businessData);
      toast.success('Business added successfully!');
      navigate('/dashboard/' + res?.newBusiness._id);
    } catch (error) {
      toast.error('Failed to add business');
    }
  };
  return (
    <div className="min-h-screen">
      <ToastContainer />
      <div className="flex items-center justify-between mt-6 mx-[60px]">
        <div className="text-[#3B37FF] text-[24px] leading-[36px] font-medium ">
          Business Evaluations
        </div>
        {user_id && token && (
          <button
            onClick={() => navigate('/compare-results')}
            className="bg-[#3B37FF] text-[#ffff] font-medium px-[40px] py-[11px] rounded-[10px]"
          >
            Skip
          </button>
        )}
      </div>
      <div className="flex flex-col items-center justify-center mt-[60px]">
        <h1 className="text-[24px] font-medium leading-[36px]">
          Business Information
        </h1>
        <p className="text-sm font-normal">
          Enter the essential details of the business for accurate evaluation
          and comparison.
        </p>
        <div className="mt-[30px] sm:flex-row flex-col space-x-4 items-center justify-center">
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Business Name"
            type="text"
            name="business_name"
            value={businessData.business_name}
            onChange={handleInputChange}
          />
          <input
            name="business_listing_price"
            value={businessData.business_listing_price}
            onChange={handleInputChange}
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="The Listing Price ($)"
            type="text"
          />
        </div>
        <div className="mt-[16px] flex gap-5 items-center justify-center">
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Gross Revenue ($)"
            type="text"
            name="business_gross_revenue"
            value={businessData.business_gross_revenue}
            onChange={handleInputChange}
          />
          <input
            name="business_cash_flow"
            value={businessData.business_cash_flow}
            onChange={handleInputChange}
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Cash Flow / SDE ($)"
            type="text"
          />
        </div>
        <div className="mt-[16px]">
          <textarea
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[450px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Add any links or notes for future reference..."
            name="business_notes"
            value={businessData.business_notes}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="my-[60px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[24px] font-medium leading-[36px]">
            Financing Information
          </h1>
          <p className="text-sm font-normal">
            Provide the financing details to calculate loan terms, payments, and
            overall financial projections.
          </p>
          <div className="mt-[30px] flex gap-5 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <label className="mb-2 font-medium" htmlFor="">
                SBA Loan Details
              </label>
              <input
                className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text:[14px] focus:outline-none"
                placeholder="Loan Amount ($)"
                type="text"
                name="loan_sba_amount"
                value={businessData.loan_sba_amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <label className="mb-2 font-medium" htmlFor="">
                Seller Loan Details
              </label>
              <input
                className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text:[14px] focus:outline-none"
                placeholder="Loan Amount ($)"
                type="text"
                name="loan_seller_amount"
                value={businessData.loan_seller_amount}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-[16px] flex gap-5 items-center justify-center">
          <div className="flex gap-4">
            <input
              className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
              placeholder="Loan Rate (%)"
              type="text"
              name="loan_sba_rate"
              value={businessData.loan_sba_rate}
              onChange={handleInputChange}
            />
            <input
              className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
              placeholder="Loan Term (in yrs)"
              type="text"
              name="loan_sba_term"
              value={businessData.loan_sba_term}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-4">
            <input
              className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
              placeholder="Loan Rate (%)"
              type="text"
              name="loan_seller_rate"
              value={businessData.loan_seller_rate}
              onChange={handleInputChange}
            />
            <input
              className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
              placeholder="Loan Term (in yrs)"
              type="text"
              name="loan_seller_term"
              value={businessData.loan_seller_term}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[16px]">
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Down Payment ($)"
            type="text"
            name="loan_down_payment"
            value={businessData.loan_down_payment}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-[30px]">
        <h1 className="text-[24px] font-medium leading-[36px]">Assumptions</h1>
        <p className="text-sm font-normal">
          Input your assumptions to tailor the evaluation based on your
          financial expectations and business goals
        </p>
        <div className="mt-[30px] flex gap-5 items-center justify-center">
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Desired Owner Salary ($)"
            type="text"
            name="desired_owner_salary"
            value={businessData.desired_owner_salary}
            onChange={handleInputChange}
          />
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Additional Startup Capital ($)"
            type="text"
            name="additional_startup_capital"
            value={businessData.additional_startup_capital}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-[16px] flex gap-5 items-center justify-center">
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Additional Capital Expenses ($)"
            type="text"
            name="additional_capital_expenses"
            value={businessData.additional_capital_expenses}
            onChange={handleInputChange}
          />
          <input
            className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none"
            placeholder="Expected Annual Growth Rate (%)"
            type="text"
            name="expected_annual_growth_rate"
            value={businessData.expected_annual_growth_rate}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mb-[60px]">
        <div className="flex items-center justify-center mt-[30px]">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#3B37FF] text-[#ffff] font-medium px-[40px] py-[11px] rounded-[10px]"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Evaluate'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBusiness;
