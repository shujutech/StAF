import React from 'react';
import { useTranslation } from 'react-i18next';
import companyLogo from '@app/assets/images/company-logo.webp';
import * as Sty from './PageHeader.styles';

const PageHeader: React.FC = () => {
	const { t: trsl } = useTranslation();
	return (
		<div style={{ color: 'var(--primary-color)' }}>
			<div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
				<img
					src={companyLogo}
					style={{ width: '42px', height: '42px', paddingLeft: '0.5rem', paddingTop: '0.5rem' }}
					alt=""
					onClick={() => window.open(`${trsl('common.myCompanyUrl')}`)}
				/>
				<div style={{  paddingLeft: '0.5rem', paddingRight: '1rem', borderRight: '1px solid #CCB' }}>
					<Sty.CompanyName>{trsl('common.myCompanyName')}</Sty.CompanyName>
					<div style={{ fontSize: '0.8rem', lineHeight: '0.8rem', fontFamily: 'system-ui', letterSpacing: '0.005rem', fontWeight: 400 }}>
						<a href={`mailto:${trsl('common.myCompanyEmail')}`}>{trsl('common.myCompanyEmail')}</a>
					</div>
				</div>
				<div style={{  }}>
					<span style={{ fontSize: 'xx-large', fontStyle: 'italic', fontWeight: 500, fontFamily: 'Times New Roman', paddingLeft: '20px', display: 'flex', alignItems: 'center' }}>
						{trsl('common.appShortName')}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
