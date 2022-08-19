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

export type ThemeTypeProps = 'light' | 'dark';

export { Button } from './Button';
// BaseButtonProps
export * from './Button';
// LoadingType, LoadingProps
export { Loader } from './Loader';
export * from './Loader';
