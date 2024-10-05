
import { useNavigate } from "react-router-dom"

function ResetPassword() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto text-center">
                <h1 className="text-[32px] font-[500] leading-[48px]">Reset Password</h1>
                <p className="text-[16px] font-normal leading-[24px]">Enter your email ID to receive an OTP.</p>
                <form className="mt-[40px] w-full">
                    <div className="">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-lg focus:outline-none bg-[#8F8F8F0D]/5"
                        />
                    </div>
                </form>
                <button
                    onClick={() => navigate("/verify-otp")}
                    type="submit"
                    className="w-full py-3 mt-[32px] bg-[#3B37FF] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Next
                </button>
            </div>
            <div className="py-4">
                <p className="text-center text-[#8F8F8F] text-sm font-medium">
                    © 2024 Business Evaluation Tool
                </p>
            </div>

        </div>
    )
}

export default ResetPassword