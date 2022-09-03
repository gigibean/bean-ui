import React from 'react';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  'data-element-name'?: string;
}

// alias
export type HTMLElementProps = React.HTMLAttributes<HTMLElement>;
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type ColorType =
  | 'red'
  | 'pink'
  | 'purple'
  | 'deepPurple'
  | 'indigo'
  | 'blue'
  | 'lightBlue'
  | 'green'
  | 'lightGreen'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'deepOrange'
  | 'brown'
  | 'gray';

export type SizeType = 'small' | 'medium' | 'large';

export type VariantType = 'contained' | 'text' | 'outlined';

export type ThemeType = 'light' | 'dark';

export type ScaleType = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface CommonComponentProps {
  /** 'light' or 'dark'
   *
   * default: 'light'
   */
  theme?: ThemeType;
  /** 'red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'gray', rgb or hex
   *
   * default: 'deepPurple'
   */
  color?: ColorType | string;
  className?: string;
  /** 'contained' | 'text' | 'outlined'
   *
   * default: 'contained'
   */
  variant?: VariantType;
  /** 'small' | 'medium' | 'large'
   *
   * default: 'medium'
   */
  size?: SizeType;
  /** color scale 50 to 900
   *
   *  50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
   *
   * deault: 500
   */
  scale?: ScaleType;
}

export * from './Button';
export * from './Loader';
export * from './CheckBox';
export * from './Radio';
