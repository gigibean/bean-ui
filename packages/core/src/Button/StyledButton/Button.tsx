import { BaseButtonProps } from '../BaseButton/Button';
// import { BaseButton } from '../BaseButton/Button';
import { colors, textColors } from '@bean-ui/common';
import { useMemo } from 'react';

type BorderRadiusProps = 'small' | 'large';

export interface StyleButtonProps extends BaseButtonProps {
  theme: 'purple' | 'white' | 'lightGray' | 'borderGray' | 'noBorderGray' | 'noBoderPurple';
  borderRadius: BorderRadiusProps | string;
  size: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  stretch?: boolean;
  // leftIcon?: ReactElement<IconProps, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  // rightIcon?: ReactElement<IconProps, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
}

const buttonBorderRadius = {
  small: '4px',
  large: '90px',
};
const buttonWidths = {
  xxxxs: '82px',
  xxxs: '134px',
  xxs: '195px',
  xs: '240px',
  s: '268px',
  m: '276px',
  l: '300px',
  xl: '335px',
  xxl: '339px',
};

const buttonHeights = {
  xxxxs: '37px',
  xxxs: '44px',
  xxs: '54px',
  xs: '55px',
  s: '55px',
  m: '53px',
  l: '53px',
  xl: '44px',
  xxl: '55px',
};

// export const Theme = {
//   purple: {
//     bkgColor: colors.purple[100],
//     fontColor: textColors.purple[100],
//     border: border.none,
//   },
//   white: {
//     bkgColor: colors.white,
//     fontColor: textColors.white,
//     border: border.black,
//   },
//   lightGray: {
//     bkgColor: colors.gray[100],
//     fontColor: textColors.gray[100],
//     border: border.none,
//   },
//   borderGray: {
//     bkgColor: colors.white,
//     fontColor: textColors.white,
//     border: border.gray,
//   },
//   noBorderGray: {
//     bkgColor: colors.white,
//     fontColor: textColors.white,
//     border: border.none,
//   },
//   noBoderPurple: {
//     bkgColor: 'transparent',
//     fontColor: colors.purple[100],
//     border: border.none,
//   },
// };

export const Button = ({
  onClick,
  theme,
  type,
  borderRadius,
  disabled,
  stretch,
  // leftIcon,
  // rightIcon,
  // loadingColor,
  // loadingType,
  // loadingSize,
  // buttonAttributes,
  // children,
  // size,
  // width,
  // height,
  isLoading,
}: StyleButtonProps) => {
  // const themeStyle = useMemo(() => {
  //   let themes = {
  //     fontColor: '',
  //     bkgColor: '',
  //     border: '',
  //   };
  //   if (Theme[theme]) {
  //     themes = { ...Theme[theme] };
  //   }
  //   themes.fontColor = fontColor;
  // }, [theme, fontColor]);
  // return (
  //   <BaseButton
  //     onClick={onClick}
  //     type={type}
  //     {...buttonAttributes}
  //     disabled={disabled}
  //     borderRadius={(buttonBorderRadius[borderRadius] as BorderRadiusProps) || borderRadius}
  //     fontColor={Theme[theme]?.fontColor}
  //     bkgColor={Theme[theme]?.bkgColor}
  //     border={Theme[theme]?.border}
  //     width={buttonWidths[size]}
  //     height={buttonHeights[size]}
  //     stretch={stretch}
  //     loadingColor={loadingColor}
  //     loadingType={loadingType}
  //     loadingSize={loadingSize}
  //     isLoading={isLoading}
  //   >
  //     {/* {leftIcon && leftIcon} */}
  //     <a>{children}</a>
  //     {/* {rightIcon && rightIcon} */}
  //   </BaseButton>
  // );
  return <div>button</div>;
};

Button.defaultProps = {
  onClick: () => '',
  size: '',
  theme: '',
  type: 'button',
  borderRadius: 'small',
  to: '',
  disabled: false,
  stretch: false,
  // leftIcon: undefined,
  // rightIcon: undefined,
  loadingType: 'spin',
  loadingColor: 'green',
  loadingSize: 40,
  anchorAttributes: undefined,
  buttonAttributes: undefined,
  children: '',
  isLoading: false,
};
