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
import { CommonComponentProps, Omit } from 'src/index';
import { Loader } from 'src/Loader';
interface CommonButtonProps extends CommonComponentProps {
  children?: React.ReactNode;
  disabled?: boolean;
  stretch?: boolean;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
}

type OmittedAnchorAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, CommonButtonProps>;

type OmittedButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, CommonButtonProps>;

export interface BaseButtonProps extends CommonButtonProps {
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}
/**
 * Common Button Component:
 *
 * ```tsx
 * <Button color="deepPurple" scale={500} size="medium" theme="light" variant="contained">
 *  button
 * </Button>
 * ```
 *
 * NOTE: If href prop is not undefined, this button element changes to a anchor element.
 *
 * NOTE: While isLoading prop is true, onClick event isn't invoked.
 */
const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      theme = 'light',
      className,
      color = 'deepPurple',
      variant = 'contained',
      size = 'medium',
      disabled = false,
      stretch = false,
      onClick,
      href,
      isLoading,
      type,
      scale,
      LeftIcon,
      RightIcon,
      ...rest
    },
    ref,
  ) => {
    const [componentType, setComponentType] = useState<React.ElementType>('button');

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
      return createColors({ color, theme, scale });
    }, [color, theme, scale]);

    // change tag name
    useEffect(() => {
      if (href) setComponentType('a');
      else setComponentType('button');
    }, [href, setComponentType]);

    return (
      <ButtonStyle
        className={className}
        size={size}
        disabled={disabled}
        stretch={stretch}
        as={componentType}
        onClick={handleClick}
        ref={ref}
        colorSet={colorSet}
        variant={variant}
        {...{ ...rest, href }}
      >
        {children}
        {isLoading && <Loader size={20} />}
      </ButtonStyle>
    );
  },
);

export default Button;

Button.defaultProps = {
  theme: 'light',
  color: 'deepPurple',
  variant: 'contained',
  size: 'medium',
  disabled: false,
  stretch: false,
};
