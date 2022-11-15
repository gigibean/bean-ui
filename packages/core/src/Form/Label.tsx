import React, { forwardRef, InputHTMLAttributes } from 'react';
import { CommonComponentProps, Omit } from 'src/index';
import { LabelWrapper } from './style';

interface CommonLabelProps extends Pick<CommonComponentProps, 'theme' | 'className' | 'size'> {
  control?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  label: string;
}

type OmittedLabelAttribute = Omit<InputHTMLAttributes<HTMLLabelElement>, CommonLabelProps>;

export interface LabelProps extends CommonLabelProps {
  labelAttributes?: OmittedLabelAttribute;
}

/**
 * Label component
 *
 * ```tsx
 * <CheckBox checked={red} {...controlProps('red')} color="red" />
 * <Label for="red" label="red" />
 * ```
 *
 * with control prop,
 * ```tsx
 * <Label
 *   label="deepPurple"
 *   control={<Radio {...controlProps('deepPurple')} color="deepPurple" />}
 * />
 * ```
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    { control, theme = 'light', className, size = 'medium', disabled = false, id, label, ...rest },
    ref,
  ) => {
    return (
      <LabelWrapper
        theme={theme}
        className={className}
        size={size}
        disabled={disabled}
        id={id}
        ref={ref}
        {...rest}
      >
        {control}
        {label}
      </LabelWrapper>
    );
  },
);

Label.defaultProps = {
  theme: 'light',
  size: 'medium',
  disabled: false,
};
