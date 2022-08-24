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
      return '1.5rem;';
  }
};

export const RadioContent = styled.span<RadioContentProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

  & > svg:first-child {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: ${({ size }) => getSize(size)};
    transform: scale(1);
  }
  & > svg:nth-child(2) {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: ${({ size }) => getSize(size)};
    left: 0px;
    position: absolute;
    transform: scale(1);
    transition: transform 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;
