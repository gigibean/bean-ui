// checkedIcon	node	<CheckBoxIcon />
// icon	node	<CheckBoxOutlineBlankIcon />
// inputProps	object
// inputRef	ref
// required	bool	false
// size
// value	any

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
import { CheckBoxContent } from './style';

export interface CommonCheckBoxProps extends Omit<CommonComponentProps, 'variant'> {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  required?: boolean;
}

type OmittedInputArrtibute = Omit<InputHTMLAttributes<HTMLInputElement>, CommonCheckBoxProps>;

export interface CheckBoxProps extends CommonCheckBoxProps {
  inputAttributes?: OmittedInputArrtibute;
}
/**
 * Checkbox Input Component
 *
 *
 * NOTE: if checked prop isn't undefined, it can't change itself without state and onChange event:
 *
 * ```tsx
 * ...
 * const [state, setState] = useState(true)
 * <CheckBox checked={state} onChange={(e) => setState(e.target.checked)} />
 * ...
 * ```
 *
 * Without checked and onChange props, the checked state changes automatically.
 */
export const CheckBox = forwardRef<HTMLSpanElement, CheckBoxProps>(
  (
    {
      theme = 'light',
      className,
      color = 'deepPurple',
      size = 'medium',
      scale = 500,
      checked,
      onChange,
      defaultChecked = false,
      disabled = false,
      id,
      required = false,
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
      if (checked !== undefined && onChange === undefined && !disabled) {
        console.error(
          [
            'ex)',
            'const [state, setState] = useState(checked)',
            'const handleClick = (e) => setState(e.tartget.checked)',
            '<CheckBox checked={state} onClick={handleClick) />',
            '...',
          ].join('\n'),
        );
      }
    }, [checked, onChange]);

    useEffect(() => {
      if (defaultChecked !== undefined) setCheckState(defaultChecked);
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
      <CheckBoxContent
        className={className}
        colorSet={colorSet}
        size={size}
        disabled={disabled}
        ref={ref}
      >
        <input
          type="checkbox"
          checked={finalCheckState}
          disabled={disabled}
          id={id}
          onChange={handleChange}
          {...inputAttributes}
          {...rest}
        />
        {finalCheckState ? <CheckedOn /> : <CheckedOff />}
      </CheckBoxContent>
    );
  },
);

const CheckedOn = memo(() => {
  return (
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
  );
});

const CheckedOff = memo(() => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CheckBoxOutlineBlankIcon"
    >
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
    </svg>
  );
});

CheckBox.defaultProps = {
  theme: 'light',
  color: 'deepPurple',
  size: 'medium',
  scale: 500,
  disabled: false,
};
