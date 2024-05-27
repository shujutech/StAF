
import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const CompanyName = styled.div`
	color: var(--primary-color);

	@media only screen and ${media.xs} {
		font-size: ${FONT_SIZE.lg};
		font-weight: ${FONT_WEIGHT.bold};
		line-height: 1.5625rem;
	}

	@media only screen and ${media.md} {
		font-size: ${FONT_SIZE.xxl};
		font-weight: ${FONT_WEIGHT.bold};
		line-height: 1.9375rem;
	}

	@media only screen and ${media.xl} {
		font-size: ${FONT_SIZE.xxxl};
		font-weight: ${FONT_WEIGHT.extraBold};
		line-height: 2.125rem;
	}
`;
