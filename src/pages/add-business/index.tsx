// import React from 'react'

function AddBusiness() {
    return (
        <div className="min-h-screen">
            <div className="text-[#3B37FF] text-[24px] leading-[36px] font-medium mt-6 mx-[60px]">Business Evaluations</div>
            <div className="flex flex-col items-center justify-center mt-[60px]">
                <h1 className="text-[24px] font-medium leading-[36px]">Business Information</h1>
                <p className="text-sm font-normal">Enter the essential details of the business for accurate evaluation and comparison.</p>
                <div className="mt-[30px] flex gap-5 items-center justify-center">
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Your Business Name" type="text" />
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="The Listing Price ($)" type="text" />
                </div>
                <div className="mt-[16px] flex gap-5 items-center justify-center">
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Gross Revenue ($)" type="text" />
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Cash Flow / SDE ($)" type="text" />
                </div>
                <div className="mt-[16px]">
                    <textarea className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[450px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Add any links or notes for future reference..." />
                </div>
            </div>
            <div className="my-[60px]">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[24px] font-medium leading-[36px]">Financing Information</h1>
                    <p className="text-sm font-normal">Provide the financing details to calculate loan terms, payments, and overall financial projections.</p>
                    <div className="mt-[30px] flex gap-5 items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <label className="mb-2 font-medium" htmlFor="">SBA Loan Details</label>
                            <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Loan Amount ($)" type="text" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <label className="mb-2 font-medium" htmlFor="">Seller Loan Details</label>
                            <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Loan Amount ($)" type="text" />
                        </div>
                    </div>
                </div>
                <div className="mt-[16px] flex gap-5 items-center justify-center">
                    <div className="flex gap-4">
                        <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Loan Rate (%)" type="text" />
                        <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Loan Term (in yrs) " type="text" />
                    </div>
                    <div className="flex gap-4">
                        <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Loan Rate (%)" type="text" />
                        <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Loan Term (in yrs)" type="text" />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[16px]">
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Down Payment ($)" type="text" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mb-[60px]">
                <h1 className="text-[24px] font-medium leading-[36px]">Assumptions</h1>
                <p className="text-sm font-normal">Input your assumptions to tailor the evaluation based on your financial expectations and business goals</p>
                <div className="mt-[30px] flex gap-5 items-center justify-center">
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Desired Owner Salary ($)" type="text" />
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Additional Startup Capital ($)" type="text" />
                </div>
                <div className="mt-[16px] flex gap-5 items-center justify-center">
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Additional Capital Expense ($)" type="text" />
                    <input className="bg-[#3B37FF0D]/5 px-[15px] py-[17px] border border-[#3B37FF2B]/15 rounded-[10px] min-w-[400px] placeholder:text-[#8F8F8F] placeholder:text-[14px] focus:outline-none" placeholder="Expected Annual Growth Rate (%)" type="text" />
                </div>
            </div>
            <div className="flex items-center justify-center mb-[60px]">
                <button className="bg-[#3B37FF] text-[#ffff] font-medium px-[40px] py-[11px] rounded-[10px]">Evaluate</button>
            </div>

        </div>
    )
}

export default AddBusiness