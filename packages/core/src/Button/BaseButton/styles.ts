import styled, { css } from '@bean-ui/styled-engine';
import { darken, lighten } from 'polished';
import { ColorSetProps } from 'src/utils/getColor';
import type { SizeType, VariantType } from 'src/index';

type BaseButtonStyleProps = {
  size: SizeType;
  stretch?: boolean;
  disabled?: boolean;
  colorSet: ColorSetProps;
  variant: VariantType;
};

const buttonStyleBySize = (key: SizeType) => {
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

const buttonStyleByVriant = (variant: VariantType, colorSet: ColorSetProps) => {
  switch (variant) {
    case 'contained':
      return containedButtonStyleByColorSet(colorSet);
    case 'text':
      return textButtonStyleByColorSet(colorSet);
    case 'outlined':
      return outlineddButtonStyleByColorSet(colorSet);
  }
};

const containedButtonStyleByColorSet = (colorSet: ColorSetProps) => {
  return css`
    background: ${colorSet.main};
    color: ${colorSet.text};
    border: none;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
      0px 1px 5px 0px rgb(0 0 0 / 12%);
    & span > svg {
      fill: ${colorSet.text};
    }

    &:hover {
      background: ${colorSet.hover};
      color: ${colorSet.hoverT};
      border: none;
      & span > svg {
        fill: ${colorSet.hoverT};
      }
    }

    &:active {
      background: ${colorSet.active};
      color: ${colorSet.activeT};
      border: none;
      & span > svg {
        fill: ${colorSet.activeT};
      }
    }

    &:disabled {
      background: ${lighten(0.4, colorSet.textPalette.disabled)};
      color: ${colorSet.textPalette.disabled};
      border: none;
    }
  `;
};

const textButtonStyleByColorSet = (colorSet: ColorSetProps) => {
  return css`
    background: transparent;
    color: ${colorSet.main};
    border: none;
    box-shadow: none;
    & span > svg {
      fill: ${colorSet.main};
    }

    &:hover {
      background: ${colorSet.hoverTrans};
      color: ${colorSet.main};
      border: none;
      & span > svg {
        fill: ${colorSet.main};
      }
    }

    &:active {
      background: ${colorSet.activeTrans};
      color: ${colorSet.main};
      border: none;
      & span > svg {
        fill: ${colorSet.main};
      }
    }

    &:disabled {
      background: transparent;
      color: ${colorSet.textPalette.disabled};
      border: none;
    }
  `;
};

const outlineddButtonStyleByColorSet = (colorSet: ColorSetProps) => {
  return css`
    background: transparent;
    color: ${colorSet.main};
    border: 1px solid ${colorSet.hoverTrans};
    box-shadow: none;
    & span > svg {
      fill: ${colorSet.main};
    }

    &:hover {
      background: ${colorSet.hoverTrans};
      color: ${colorSet.main};
      border: 1px solid ${colorSet.main};
      & span > svg {
        fill: ${colorSet.main};
      }
    }

    &:active {
      background: ${colorSet.activeTrans};
      color: ${colorSet.main};
      border: 1px solid ${colorSet.main};
      & span > svg {
        fill: ${colorSet.main};
      }
    }
    &:disabled {
      background: transparent;
      border: 1px solid ${lighten(0.5, colorSet.textPalette.disabled)};
      color: ${colorSet.textPalette.disabled};
    }
  `;
};

export const ButtonStyle = styled.button<BaseButtonStyleProps>`
  ${({ size }) => buttonStyleBySize(size)}
  ${({ variant, colorSet }) => buttonStyleByVriant(variant, colorSet)};
  width: ${({ stretch }) => (stretch ? '-webkit-fill-available' : `auto`)};
  border-radius: 4px;
  min-width: 64px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0px;
  vertical-align: middle;
  text-decoration: none;
  transition: all 0.1s ease-out;
  gap: 5px;
  & > span {
    display: contents;
  }
`;
