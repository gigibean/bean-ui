import styled from '@bean-ui/styled-engine';
import { darkPalette, lightPalette } from 'src/utils/palette';
import { LabelProps } from './Label';

type LabelWrapperProps = Pick<LabelProps, 'theme' | 'size' | 'disabled'>;

const getTxtColor = (theme = 'light', disabled = false) => {
  const palette = theme === 'light' ? lightPalette : darkPalette;
  if (disabled) {
    return `
    color: ${palette.text.disabled};
    cursor: not-allowed;
    pointer-events: none;
    `;
  }
  return `
    color: ${palette.text.primary};
    &:hover {
        color: ${palette.text.secondary};
    }
    &:active {
        color: ${palette.action.active};
    }
    &:focus {
        color: ${palette.action.selected};
    }
    `;
};

const getSize = (size = 'medium') => {
  switch (size) {
    case 'small':
      return `
            font-weight: 400;
            font-size: 0.8rem;
            line-height: 1.2;
            letter-spacing: 0.007em;
            `;
    case 'large':
      return `
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.8;
            letter-spacing: 0.01em;
            `;
    case 'medium':
    default:
      return `
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.00938em;
            `;
  }
};

export const LabelWrapper = styled.label<LabelWrapperProps>`
  margin: 0px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  ${({ size }) => getSize(size)}
  ${({ theme, disabled }) => getTxtColor(theme, disabled)}
`;
