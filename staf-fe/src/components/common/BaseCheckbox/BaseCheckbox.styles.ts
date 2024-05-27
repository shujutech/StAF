import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';

const { Group } = AntdCheckbox;

export const Checkbox = styled(AntdCheckbox)`
	& .ant-checkbox-inner {
		border-radius: 0.1875rem;
		height: 1.25rem;
		width: 1.25rem;
		border: 1px solid rgb(217, 217, 217);
	}

	&.ant-checkbox-inner: hover {
		border: 1px solid rgb(217, 217, 217);
	}

	.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
		border-color: var(--disabled-color);
	}

	.ant-checkbox-disabled + span {
		color: var(--disabled-color);
	}

	& .ant-checkbox-inner::after :hover {
		border: 1px solid rgb(217, 217, 217);
	}

	:where(span).ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
		border-color: rgb(217, 217, 217);
		background: white;
	}

	:where(span).ant-checkbox .ant-checkbox-inner {
	}

`;

export const CheckboxGroup = styled(Group)`
	& .ant-checkbox-inner {
		border-radius: 0.1875rem;
		height: 1.25rem;
		width: 1.25rem;
		border: 1px solid rgb(217, 217, 217);
	}
`;
