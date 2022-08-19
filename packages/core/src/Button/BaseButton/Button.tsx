import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ButtonStyle } from './styles';
import createColors from 'src/utils/getColor';
import type { ColorType, Omit, SizeType, ThemeTypeProps, VariantType } from 'src/index';

interface CommonButtonProps {
  children?: React.ReactNode;
  /**
   * @example theme
   * 'light, 'dark'
   */
  theme?: ThemeTypeProps;
  className?: string;
  /**
   * @exmaple color
   * 'red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'gray', rgb or hex
   */
  color: ColorType | string;
  variant: VariantType;
  size?: SizeType;
  disabled?: boolean;
  stretch?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  to?: any;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
}

type OmittedAnchorAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, CommonButtonProps>;

type OmittedButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, CommonButtonProps>;

export interface BaseButtonProps extends CommonButtonProps {
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}

const Button = forwardRef<any, BaseButtonProps>(
  (
    {
      children,
      theme = 'light',
      className,
      color = 'purple',
      variant = 'contained',
      size = 'medium',
      disabled = false,
      stretch = false,
      onClick,
      isLoading,
      to,
      LeftIcon,
      RightIcon,
      ...rest
    },
    ref,
  ) => {
    const [as, setAs] = useState<React.ElementType<any> | undefined>('button');

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
        if (isLoading) {
          return;
        }
        onClick && onClick(e);
      },
      [isLoading, onClick],
    );

    // create Color set
    const colorSet = useMemo(() => {
      return createColors({ color, theme });
    }, [color, theme]);

    // change tag name
    useEffect(() => {
      if (to) setAs('a');
      else setAs('button');
    }, [to, setAs]);

    return (
      <ButtonStyle
        className={className}
        size={size}
        disabled={disabled}
        stretch={stretch}
        as={as}
        onClick={handleClick}
        ref={ref}
        colorSet={colorSet}
        variant={variant}
        {...rest}
      >
        {children}
      </ButtonStyle>
    );
  },
);

export default Button;
