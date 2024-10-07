import { RiPencilFill } from 'react-icons/ri';
import user from '../../assets/image.svg';
import { CashflowChart } from '../../components/cashflow-chart/cashflow-chart';
import { LineChartCard } from '../../components/linechart';
import { BarChartComponent } from '../../components/barchart';
import DataTable from '../../components/Table';
function Dashboard() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] pb-6">
            <div className="mt-6 mx-[60px] flex justify-between items-center">
                <h1 className="text-[#272727] text-[24px] leading-[36px] font-medium">Business Evaluations</h1>
                <div className='flex gap-2 items-center'>
                    <button className="bg-[#272727] text-white font-medium px-4 py-3 rounded-[10px]">Evaluate business</button>
                    <div className='border-[2px] border-black rounded-full'><img className='p-2' src={user} alt="" /></div>
                </div>
            </div>
            <div className='flex justify-between mx-[60px] mt-[25px]'>
                <div className=''>
                    <h1 className='text-[#3B37FF] text-[26px] leading-[24px] font-bold'>TATA Companies</h1>
                    <div className='flex items-center gap-1 mt-1 cursor-pointer'>
                        <h3>Edit values</h3>
                        <RiPencilFill className='text-[#2B3674] text-[20px]' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <button className='text-[#3B37FF] font-medium px-2 py-2 rounded-[10px] border-[#3B37FF] border text-sm'>Compare Results</button>
                    </div>
                    <div>
                        <button className='bg-[#3B37FF] text-[#ffff] font-medium px-3 py-2 rounded-[10px] text-sm'>Generate Report</button>
                    </div>
                </div>
            </div>
            <div className='mt-[22px] grid grid-cols-6 mx-[60px] gap-[8px]'>
                <div className='flex flex-col pl-[30px] py-[12px] bg-[#2B3674] rounded-[15px]'>
                    <h3 className='text-[16px] text-[#FFFFFF] font-semibold leading-[24px]'>ROI</h3>
                    <p className='text-[#A3AED0] text-xs font-medium'>Return on Investment</p>
                    <h3 className='text-[#ffff] text-[20px] leading-[32px] mt-1 font-bold'>$574.34</h3>
                </div>
                <div className='flex flex-col pl-[30px] py-[12px] bg-[#2B3674] rounded-[15px]'>
                    <h3 className='text-[16px] text-[#FFFFFF] font-semibold leading-[24px]'>DSCR</h3>
                    <p className='text-[#A3AED0] text-xs font-medium'>Debt Service Coverage Ratio</p>
                    <h3 className='text-[#ffff] text-[20px] leading-[32px] mt-1 font-bold'>0.82</h3>
                </div>
                <div className='flex flex-col pl-[30px] py-[12px] bg-[#2B3674] rounded-[15px]'>
                    <h3 className='text-[16px] text-[#FFFFFF] font-semibold leading-[24px]'>Net Profit Margins</h3>
                    <p className='text-[#A3AED0] text-xs font-medium'>Post Purchase</p>
                    <h3 className='text-[#ffff] text-[20px] leading-[32px] mt-1 font-bold'>80.00%</h3>
                </div>
                <div className='flex flex-col justify-center items-start pl-[30px] py-[12px] bg-[#2B3674] rounded-[15px] h-full'>
                    <h3 className='text-[16px] text-[#FFFFFF] font-semibold leading-[24px]'>Break-even Point</h3>
                    <h3 className='text-[#ffff] text-[20px] leading-[32px] font-bold'>7.47x</h3>
                </div>
                <div className='flex flex-col justify-center items-start pl-[30px] py-[12px] bg-[#2B3674] rounded-[15px] h-full'>
                    <h3 className='text-[16px] text-[#FFFFFF] font-semibold leading-[24px]'>Payback Period</h3>
                    <h3 className='text-[#ffff] text-[20px] leading-[32px] font-bold'>3.2 years</h3>
                </div>
                <div className='flex flex-col justify-center items-start pl-[30px] py-[12px] bg-[#2B3674] rounded-[15px] h-full'>
                    <h3 className='text-[16px] text-[#FFFFFF] font-semibold leading-[24px]'>Equity Multiple</h3>
                    <h3 className='text-[#ffff] text-[20px] leading-[32px] font-bold'>7.47x</h3>
                </div>
            </div>
            <div className='grid grid-cols-2 mx-[60px] my-6 gap-6'>
                <div className='col-span-1'>
                    <div>
                        <LineChartCard />
                    </div>
                    <div className='mt-4'>
                        <CashflowChart />
                    </div>
                </div>
                <div className='col-span-1'>
                    <div>
                        <BarChartComponent />
                    </div>
                    <div className='mt-5'>
                        <DataTable />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard