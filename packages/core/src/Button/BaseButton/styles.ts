import styled, { css } from '@bean-ui/styled-engine';
import { darken } from 'polished';
import { ButtonSize } from './Button';

type BaseButtonStyleProps = {
  fontColor?: string;
  bkgColor?: string;
  hoverBkgColor?: string;
  padding?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontStyle?: string;
  border?: string;
  hoverFontColor?: string;
  stretch?: boolean;
  disabled?: boolean;
};

const buttonStyleBySize = (key: ButtonSize) => {
  switch (key) {
    case 'small':
      return css`
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.2px;
        padding: 0 12px;
        height: 32px;
      `;
    case 'medium':
      return css`
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.2px;
        padding: 0 16px;
        height: 40px;
      `;
    case 'large':
      return css`
        font-weight: 700;
        font-size: 16px;
        letter-spacing: -0.2px;
        padding: 0 20px;
        height: 48px;
      `;
  }
};

export const ButtonStyle = styled.button<BaseButtonStyleProps>`
  color: ${({ fontColor }) => fontColor};
  /* background-color: ${({ bkgColor }) => bkgColor}; */
  width: ${({ width, stretch }) =>
    stretch ? '-webkit-fill-available' : width ? `${width}` : `auto`};
  height: ${({ height }) => (height ? `${height}` : `auto`)};
  border-radius: ${({ borderRadius }) => `${borderRadius}`};
  padding: ${({ padding }) => padding};
  ${({ fontStyle }) => fontStyle}
  border: ${({ border }) => border};
  cursor: pointer;
  transition: all 0.1s ease-out;
  color: ${({ fontColor }) => fontColor};

  &:hover {
    color: ${({ hoverFontColor }) => hoverFontColor};
    background-color: ${({ hoverBkgColor, bkgColor, disabled }) =>
      hoverBkgColor === '' && bkgColor !== '' && !disabled
        ? `${darken(0.1, bkgColor || '#000')}`
        : hoverBkgColor};
  }
  & > * {
    color: ${({ fontColor }) => fontColor};
  }
`;

export const ButtonWrapper = styled.div`
  & > * {
    display: inherit;
  }
`;
