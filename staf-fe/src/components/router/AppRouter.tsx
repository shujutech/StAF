import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { withLoading } from '@app/hocs/withLoading.hoc';
import LoginPage from '@app/pages/LoginPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import SignUpPage from '@app/pages/SignUpPage';
import SecurityCodePage from '@app/pages/SecurityCodePage';
import LockPage from '@app/pages/LockPage';
import RequireAuth from '@app/components/router/RequireAuth';
import TermsOfUsePage from '@app/pages/TermsOfUsePage';
import PrivacyPolicyPage from '@app/pages/PrivacyPolicyPage';


const AuthLayout = React.lazy(() => import('@app/components/layouts/AuthLayout/AuthLayout'));
const AuthLayoutFallback = withLoading(AuthLayout);


export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/auth/login" replace />} />
				<Route path="/auth" element={<AuthLayoutFallback />}>
					<Route path="login" element={<LoginPage />} />
					<Route path="forgot-password" element={<ForgotPasswordPage />} />
					<Route path="sign-up" element={<SignUpPage />} />
					<Route path="security-code" element={<SecurityCodePage />} />
					<Route path="lock" element={ <RequireAuth> <LockPage /></RequireAuth> } />
					<Route path="terms-of-use" element={<TermsOfUsePage />} />
					<Route path="privacy-policy" element={<PrivacyPolicyPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};