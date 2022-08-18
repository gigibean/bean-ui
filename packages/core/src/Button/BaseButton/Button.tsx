import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Loader, LoadingType } from '../../Loader';
import { colors, textColors } from '@bean-ui/common';
import { ButtonStyle, ButtonWrapper } from './styles';
import { ThemeTypeProps } from 'index';
/*
children node
className string
anchorAttr
buttonAttr
color “default”/“inherit” | “orange” | “orangeLight” | “red” | “redLight” | “white” | “blue” | “blueLight” | undefined
| ‘primary’
| ‘secondary’
| ‘success’
| ‘error’
| ‘info’
| ‘warning’
| string

variant ’contained’  | ‘outlined’ | ‘text’ | string

size “small” | “medium” | “large” | string medium

disabled

fullwhidth

href
*/
interface CommonButtonProps {
  children?: React.ReactNode;
  theme?: ThemeTypeProps;
  className?: string;
  color: any;
  variant: any;
  size: any;
  disabled?: boolean;
  stretch?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  to?: any;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
}

export type ButtonSize = 'small' | 'medium' | 'large';

type OmittedAnchorAttributes = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof CommonButtonProps
>;

type OmittedButtonAttributes = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof CommonButtonProps
>;

export interface BaseButtonProps extends CommonButtonProps {
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const [as, setAs] = useState<React.ElementType<any> | undefined>('button');
  let isLoading: boolean | undefined,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    to: string | undefined;
  ({ isLoading, onClick, to } = props);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      if (isLoading) {
        return;
      }
      onClick && onClick(e);
    },
    [isLoading, onClick],
  );

  // change tag name
  useEffect(() => {
    if (to) setAs('a');
    else setAs('button');
  }, [to, setAs]);

  return <ButtonStyle {...props} as={as} onClick={handleClick} ref={ref} />;
});

export default BaseButton;
