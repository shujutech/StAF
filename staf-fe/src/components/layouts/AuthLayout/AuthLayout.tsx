import React from 'react';
import { Outlet } from 'react-router-dom';
import * as MainLayout from './AuthLayout.styles';
import PageFooter from '@app/components/common/PageTitle/PageFooter';
import PageHeader from '@app/components/common/PageTitle/PageHeader';

const AuthLayout: React.FC = () => {
	return (
		<MainLayout.Wrapper>
			<MainLayout.BackgroundWrapper>
				<MainLayout.FormItem><PageHeader/></MainLayout.FormItem>
				<MainLayout.LoginWrapper>
					<Outlet />
				</MainLayout.LoginWrapper>
				<PageFooter />
			</MainLayout.BackgroundWrapper>
		</MainLayout.Wrapper>
	);
};

export default AuthLayout;
