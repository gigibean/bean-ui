import React, {
  forwardRef,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CommonComponentProps, Omit } from 'src/index';
import createColors from 'src/utils/getColor';
import { CheckIcon, RadioContent } from './style';

interface CommonRadioProps extends Omit<CommonComponentProps, 'variant'> {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  defaultChecked?: boolean;
  value?: any;
}

type OmittedInputArrtibute = Omit<InputHTMLAttributes<HTMLInputElement>, CommonRadioProps>;

export interface RadioProps extends CommonRadioProps {
  inputAttributes?: OmittedInputArrtibute;
}

const CheckedOuter = memo(() => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="RadioButtonUncheckedIcon"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    </svg>
  );
});

const CheckedOn = memo(() => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="RadioButtonCheckedIcon"
    >
      <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
    </svg>
  );
});

/**
 * Radio input component
 *
 * ```tsx
 * ...
 * <Radio />
 * ...
 * ```
 *
 * With checked and onChange props:
 *
 * ```tsx
 * ...
 *   const [selectedValue, setSelectedValue] = React.useState('a');
 *
 *  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 *    setSelectedValue(event.target.value);
 *  };
 *
 * const controlProps = (item: string) => ({
 *    checked: selectedValue === item,
 *    onChange: handleChange,
 *    value: item,
 * });
 *
 *  return (
 *    <div>
 *      <Radio {...controlProps('a')} color="deepPurple" />
 *      <Radio {...controlProps('b')} color="orange" />
 *   </div>
 * );
 *...
 * ```
 */
export const Radio = forwardRef<HTMLSpanElement, RadioProps>(
  (
    {
      theme = 'light',
      className,
      color = 'deepPurple',
      size = 'medium',
      scale = 500,
      onChange,
      checked,
      disabled = false,
      id,
      name,
      required,
      defaultChecked,
      value,
      inputAttributes,
      ...rest
    },
    ref,
  ) => {
    const colorSet = useMemo(() => createColors({ color, theme, scale }), [color, theme, scale]);
    const [checkState, setCheckState] = useState(false);
    const [finalCheckState, setFinalCheckState] = useState(
      checked !== undefined ? checked : checkState,
    );

    useEffect(() => {
      if (defaultChecked !== undefined) {
        setCheckState(defaultChecked);
      }
    }, [defaultChecked]);

    useEffect(() => {
      setFinalCheckState(checked !== undefined ? checked : checkState);
    }, [checked, checkState]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange !== undefined) {
          onChange(e);
        } else {
          setCheckState(e.target.checked);
        }
      },
      [onChange, setCheckState],
    );

    return (
      <RadioContent
        className={className}
        colorSet={colorSet}
        size={size}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        <input
          type="radio"
          disabled={disabled}
          required={required}
          checked={finalCheckState}
          id={id}
          onChange={handleChange}
          name={name}
          value={value}
          {...inputAttributes}
        />
        <CheckIcon size={size}>
          <CheckedOuter />
          {finalCheckState && <CheckedOn />}
        </CheckIcon>
      </RadioContent>
    );
  },
);
