import { WithChildrenProps } from '@app/types/generalTypes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export const PageTitle: React.FC<WithChildrenProps> = ({ children }) => {
	const { t: trsl } = useTranslation();
  return (
    <Helmet>
       <title>{children} | {trsl('common.appShortName')} </title> 
    </Helmet>
  );
};
