import styled from 'styled-components';
import { BaseInput } from '../BaseInput/BaseInput';

export const InputPassword = styled(BaseInput.Password)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }

  &.ant-input-outlined: hover {
		border-color: var(--btn-bg-color);
  }
  &.ant-input-outlined: focus-within {
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(100, 100, 100, .6);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(100, 100, 100, .6);
      border: 1px solid rgba(100, 100, 100, .6);
    }
`;
