import styled from '@bean-ui/styled-engine';
import { ColorSetProps } from 'src/utils/getColor';
import { SizeType } from 'src/index';

interface CheckBoxContentProps {
  colorSet: ColorSetProps;
  size: SizeType;
  disabled: boolean;
}

const getSize = (size: SizeType) => {
  switch (size) {
    case 'small':
      return '1.25rem';
    case 'medium':
      return '1.5rem';
    case 'large':
      return '1.75rem';
    default:
      return '1.5rem;';
  }
};

export const CheckBoxContent = styled.span<CheckBoxContentProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 9px;
  margin: 0;
  padding: 9px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  color: ${({ colorSet }) => colorSet.main};

  & > input {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
  }
  & > svg {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: ${({ size }) => getSize(size)};
  }

  ${({ colorSet, disabled }) =>
    disabled === true &&
    `
        color: ${colorSet.textPalette.disabled};
        pointer-events: none;
        cursor: not-allowed;
    `}
`;
