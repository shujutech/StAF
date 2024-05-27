import React from 'react';
import { useTranslation } from 'react-i18next';

const PageFooter: React.FC = () => {
	const { t: trsl } = useTranslation();
	const currentYear = new Date().getFullYear();
	const myCompanyName = trsl('common.myCompanyName');
	const copyright = trsl('common.myCompanyCopyright', { currentYear, myCompanyName });

	return (
		<footer style={{ textAlign: 'center', position: 'fixed', bottom: '1rem', width: '100%', fontWeight: 300, fontFamily: 'system-ui', fontSize: 'smaller' }}>
			<p style={{ marginBottom: '0.1rem' }}>
				{ copyright }
			</p>
		</footer>
	);
};

export default PageFooter;
