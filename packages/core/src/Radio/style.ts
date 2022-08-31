import styled from '@bean-ui/styled-engine';
import { ColorSetProps } from 'src/utils/getColor';
import { SizeType } from 'src/index';

interface RadioContentProps {
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
      return '1rem;';
  }
};

export const RadioContent = styled.span<RadioContentProps>`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  padding: 9px;
  border-radius: 50%;
  color: ${({ colorSet }) => colorSet.main};

  & > input {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 1;
  }

  ${({ colorSet, disabled }) =>
    disabled === true &&
    `
        color: ${colorSet.textPalette.disabled};
        pointer-events: none;
        cursor: default;
    `}
`;

export const CheckIcon = styled.span<{ size: SizeType }>`
  position: relative;
  display: flex;
  & svg {
    user-select: none;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    width: ${({ size }) => getSize(size)};
    height: ${({ size }) => getSize(size)};
    font-size: ${({ size }) => getSize(size)};
  }
  & > svg:nth-child(2) {
    flex-shrink: 0;
    left: 0px;
    position: absolute;
  }
`;
