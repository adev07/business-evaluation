import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/login'));
const Signup = React.lazy(() => import('../pages/signup'));
const ResetPassword = React.lazy(() => import('../pages/reset-password'));
const VerifyOtp = React.lazy(() => import('../pages/verify-otp'));
const ConfirmPassword = React.lazy(() => import('../pages/confirm-password'));
const AddBusiness = React.lazy(() => import('../pages/add-business'));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/add-business" element={<AddBusiness />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
