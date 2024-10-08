import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdEye } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthStore from '../../store/authStore';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const { login, isLoading, error } = useAuthStore();

  const onSubmit = async (data: any) => {
    try {
      await login(data);
      toast.success('Login successful!');
      navigate("/add-business");
    } catch (err) {
      toast.error(error);
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <ToastContainer />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-[32px] font-medium leading-[48px] text-center">Welcome Back!</h2>
          <p className="text-center text-[16px] font-normal leading-[24px]">Log in to your account</p>

          {/* Display error message if there is one */}
          {/* {error && <p className="text-red-500 text-center">{error}</p>} */}

          {/* form starts here */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-[56px]">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
                className="w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-[10px] focus:outline-none bg-[#8F8F8F0D]/5"
              />
            </div>
            <div className="relative mt-[30px]">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', { required: true })}
                className="w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-[10px] focus:outline-none bg-[#8F8F8F0D]/5"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible color='#8F8F8F' size={24} /> : <IoMdEye color='#8F8F8F' size={24} />}
              </span>
            </div>
            <div className="text-right mt-[18px]">
              <span onClick={() => navigate("/reset-password")} className="text-[#3B37FF] cursor-pointer hover:underline text-sm underline">Forgot Password?</span>
            </div>
            <button
              type="submit"
              className="w-full mt-[30px] py-[10px] bg-[#3B37FF] text-white font-medium rounded-[10px] hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </form>
          {/* form ends here */}
        </div>
      </div>
      <div className='py-4'>
        <p className="text-center text-[#8F8F8F] text-sm font-medium">
          © 2024 Business Evaluation Tool
        </p>
      </div>
    </div>
  );
};

export default Login;
