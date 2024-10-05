import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdEye } from 'react-icons/io';

const ConformPassword = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto text-center">
                <h1 className="text-[32px] font-[500] leading-[48px]">Verification Successful!</h1>
                <p className="text-[16px] font-normal leading-[24px] mt-[8px]">Set Your New Password</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-[40px] w-full">
                    <div className="relative mb-[30px]">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="New password"
                            {...register('newPassword', { required: true })}
                            className="w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-lg focus:outline-none bg-[#8F8F8F0D]/5"
                        />
                        <span
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible color='#8F8F8F' size={24} /> : <IoMdEye color='#8F8F8F' size={24} />}
                        </span>
                    </div>
                    <div className="relative mb-[34px]">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            {...register('confirmPassword', { required: true })}
                            className="w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-lg focus:outline-none bg-[#8F8F8F0D]/5"
                        />
                        <span
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible color='#8F8F8F' size={24} /> : <IoMdEye color='#8F8F8F' size={24} />}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#3B37FF] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Set password
                    </button>
                </form>
            </div>

            {/* Footer */}
            <div className="py-4">
                <p className="text-center text-[#8F8F8F] text-sm font-medium">
                    © 2024 Business Evaluation Tool
                </p>
            </div>
        </div>
    );
};

export default ConformPassword;
