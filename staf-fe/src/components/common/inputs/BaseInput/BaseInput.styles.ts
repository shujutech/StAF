import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import { FONT_WEIGHT, FONT_SIZE } from '@app/styles/themes/constants';

export const Input = styled(AntInput)`
  &.ant-input {
    height: 42px;
  }
  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-group-addon .ant-select {
    .ant-select-selection-item {
      min-width: 5.5rem;
      color: var(--primary-color);
      font-weight: ${FONT_WEIGHT.semibold};
      font-size: ${FONT_SIZE.lg};
    }
  }

  .ant-select-arrow {
    color: var(--disabled-color);
  }

	&.ant-input-outlined: hover {
		border-color: var(--btn-bg-color) !important;
  }
	&.ant-input-outlined: focus {
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(100, 100, 100, .6);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(100, 100, 100, .6);
		border: 1px solid rgba(100, 100, 100, .6);
	}
`;
