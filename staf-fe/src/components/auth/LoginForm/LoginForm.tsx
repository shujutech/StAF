import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doLogin } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';
//import { ReactComponent as FacebookIcon } from '@app/assets/icons/facebook.svg';
//import { ReactComponent as GoogleIcon } from '@app/assets/icons/google.svg';
import * as S from './LoginForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';

interface LoginFormData {
	email: string;
	password: string;
}

export const initValues: LoginFormData = {
	email: '',
	password: '',
};

export const LoginForm: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { t: trsl } = useTranslation();

	const [isLoading, setLoading] = useState(false);

	const handleSubmit = (values: LoginFormData) => {
		setLoading(true);
		dispatch(doLogin(values))
			.unwrap()
			.then(() => navigate('/'))
			.catch((err) => {
				notificationController.error({ message: err.message });
				setLoading(false);
			});
	};

	return (
		<Auth.FormWrapper>
			<BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
				<Auth.FormTitle>{trsl('common.login')}</Auth.FormTitle>
				<S.LoginDescription>{trsl('login.loginInfo')}</S.LoginDescription>
				<Auth.FormItem
					name="email"
					label={trsl('common.email')}
					rules={[
						{ required: true, message: trsl('common.requiredField') },
						{
							type: 'email',
							message: trsl('common.notValidEmail'),
						},
					]}
				>
					<Auth.FormInput placeholder={trsl('common.email')} />
				</Auth.FormItem>
				<Auth.FormItem
					label={trsl('common.password')}
					name="password"
					rules={[{ required: true, message: trsl('common.requiredField') }]}
				>
					<Auth.FormInputPassword placeholder={trsl('common.password')} />
				</Auth.FormItem>
				<Auth.ActionsWrapper>
					<BaseForm.Item name="rememberMe" valuePropName="checked" noStyle>
						<Auth.FormCheckbox>
							<S.RememberMeText>{trsl('login.rememberMe')}</S.RememberMeText>
						</Auth.FormCheckbox>
					</BaseForm.Item>
					<Link to="/auth/forgot-password">
						<S.ForgotPasswordText>{trsl('common.forgotPass')}</S.ForgotPasswordText>
					</Link>
				</Auth.ActionsWrapper>
				<BaseForm.Item noStyle>
					<Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
						{trsl('common.login')}
					</Auth.SubmitButton>
				</BaseForm.Item>

{/* 
				<BaseForm.Item noStyle>
					<Auth.SocialButton type="default" htmlType="submit">
						<Auth.SocialIconWrapper>
							<GoogleIcon />
						</Auth.SocialIconWrapper>
						{t('login.googleLink')}
					</Auth.SocialButton>
				</BaseForm.Item>
				<BaseForm.Item noStyle>
					<Auth.SocialButton type="default" htmlType="submit">
						<Auth.SocialIconWrapper>
							<FacebookIcon />
						</Auth.SocialIconWrapper>
						{t('login.facebookLink')}
					</Auth.SocialButton>
				</BaseForm.Item>
*/}

				<Auth.FooterWrapper>
					<Auth.Text>
						{trsl('login.noAccount')}{' '}
						<Link to="/auth/sign-up">
							<Auth.LinkText>{trsl('common.here')}</Auth.LinkText>
						</Link>
					</Auth.Text>
				</Auth.FooterWrapper>
			</BaseForm>
		</Auth.FormWrapper>
	);
};
