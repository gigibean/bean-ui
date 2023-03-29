import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { createColor } from 'src/utils/getColor';
import { CommonComponentProps } from 'src/index';
import { LoaderContent } from './style';
import * as svgs from './svg';

type Svg = {
  [key: string]: string;
};

export type LoadingType = 'blank' | 'bubbles' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes';

export interface LoadingProps extends Omit<CommonComponentProps, 'size'> {
  /**
   * 'blank' | 'bubbles' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes'
   *
   * default: 'spin'
   */
  type?: LoadingType;
  /**
   * Set width and height styles
   *
   * ```js
   * ... size={14} // 14px
   * ... size={"1rem"} // 1rem
   * ```
   */
  size?: string | number;
  delay?: number;
}

/**
 * Loader Component
 *
 * ```tsx
 * <Loader color="deepPurple" scale={500} size="30px" theme="light" type="spin" />
 * ```
 */
export const Loader = memo(
  ({
    type = 'spin',
    color,
    size = 'auto',
    theme = 'light',
    scale,
    delay = 0,
    ...rest
  }: LoadingProps) => {
    const [delayed, setDelayed] = useState(false);
    const time = useRef(0);

    useEffect(() => {
      setDelayed(delay > 0);
      if (delayed) {
        time.current = setTimeout(() => {
          setDelayed(false);
        }, delay);
      }
      return () => {
        if (time.current) {
          clearTimeout(time.current);
        }
      };
    }, [delay, delayed]);

    const selectedType = delayed ? 'blank' : type;
    const SVG = (svgs as Svg)[selectedType];

    const colorSet = useMemo(() => {
      return createColor({ color, theme, scale });
    }, [color, theme, scale]);

    const style = {
      color: colorSet.main,
      height: +size ? `${+size}px` : size,
      width: +size ? `${+size}px` : size,
    };

    return (
      <LoaderContent {...style} {...rest}>
        <SVG />
      </LoaderContent>
    );
  },
);
