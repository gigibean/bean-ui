import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { createColor } from 'src/utils/getColor';
import { ThemeTypeProps } from 'src/index';
import { LoaderContent } from './style';
import * as svgs from './svg';

export type LoadingType = 'blank' | 'bubbles' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes';

export interface LoadingProps {
  type?: LoadingType;
  color?: string;
  size?: string | number;
  theme?: ThemeTypeProps;
  scale?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  delay?: number;
}

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
    }, [delay]);

    const selectedType = delayed ? 'blank' : type;
    const SVG = svgs[selectedType];

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
