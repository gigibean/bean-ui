import React, { memo, useEffect, useRef, useState } from 'react';
import { LoaderContent } from './style';
import * as svgs from './svg';
import { colors } from '@bean-ui/common';

export type LoadingType = 'blank' | 'bubbles' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes';

export interface LoadingProps {
  type: LoadingType;
  color?: string;
  margin?: string | number;
  padding?: string | number;
  size?: string | number;
  delay?: number;
}

export const Loader = memo(
  ({
    type,
    color = colors.purple[100],
    margin = 'auto',
    padding = 0,
    size = 64,
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

    const outsideStyle = {
      margin: +margin || margin,
      padding: +padding || padding,
    };

    const style = {
      fill: color,
      height: +size || size,
      width: +size || size,
    };

    return (
      <LoaderContent style={outsideStyle} {...rest}>
        <SVG style={style} />
      </LoaderContent>
    );
  },
);
