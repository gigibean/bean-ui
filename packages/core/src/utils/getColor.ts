import { colors, textColors } from '@bean-ui/common';
import { darken, lighten, transparentize } from 'polished';
import { darkPalette, lightPalette } from './palette';
import { ColorType, ThemeTypeProps } from 'src/index';

interface ColorProps {
  color: string;
  theme: ThemeTypeProps;
  scale?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  tonalOffset?: number;
}

export const colorPaltte = [
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'gray',
];

export type ColorSetProps = {
  main: string;
  text: string;
  textPalette: textPaletteProps;
  textAction: TextActionProps;
  paper: string;
  divider: string;
  hover: string;
  active: string;
  hoverT: string;
  activeT: string;
  hoverTrans: string;
  activeTrans: string;
};

type textPaletteProps = {
  primary: string;
  secondary: string;
  disabled: string;
};

type TextActionProps = {
  active: string;
  hover: string;
  selected: string;
};

export const createColor = ({
  color,
  theme,
  scale,
}: Partial<Pick<ColorProps, 'color' | 'theme' | 'scale'>>): Pick<
  ColorSetProps,
  'main' | 'text'
> => {
  const textPalette = theme === 'dark' ? darkPalette.text : lightPalette.text;
  const colorSet = {
    main: '',
    text: '',
    textPalette,
  };
  let initColor = '';
  let initText = '';
  if (color) {
    if (colorPaltte.includes(color)) {
      initColor = colors[color as ColorType][scale ?? 500];
      initText = textColors[color as ColorType][scale ?? 500];
    } else {
      initColor = color;
      initText = textPalette.primary;
    }
  }

  if (theme === 'dark') {
    colorSet.main = getLighten(initColor);
    colorSet.text = getDarken(initText);
  } else {
    colorSet.main = initColor;
    colorSet.text = initText;
  }
  return colorSet;
};

const createColors = ({ color, theme, scale, tonalOffset }: ColorProps): ColorSetProps => {
  const palette = theme === 'dark' ? darkPalette : lightPalette;

  let initColor = '';
  let initText = '';
  if (colorPaltte.includes(color)) {
    initColor = colors[color as ColorType][scale ?? 500];
    initText = textColors[color as ColorType][scale ?? 500];
  } else {
    initColor = color;
    initText = palette.text.primary;
  }

  const colorSet = {
    main: initColor,
    text: initText,
    textPalette: palette.text,
    textAction: palette.action,
    paper: palette.background.dufault,
    divider: palette.divider,
    hover: '',
    active: '',
    hoverT: '',
    activeT: '',
    hoverTrans: '',
    activeTrans: '',
  };

  if (theme === 'dark') {
    colorSet.main = getLighten(initColor);
    colorSet.text = getDarken(initText);
  }

  colorSet.hover = getActColor({
    color: initColor,
    theme,
    tonalOffset: tonalOffset ? tonalOffset : 0.1,
  });
  colorSet.active = getActColor({
    color: initColor,
    theme,
    tonalOffset: tonalOffset ? tonalOffset * 2 : 0.2,
  });
  colorSet.hoverT = getActColor({
    color: initText,
    theme,
    tonalOffset: tonalOffset ? tonalOffset : 0.1,
  });
  colorSet.activeT = getActColor({
    color: initText,
    theme,
    tonalOffset: tonalOffset ? tonalOffset * 2 : 0.2,
  });
  colorSet.hoverTrans = getOpacify(initColor, 0.6);
  colorSet.activeTrans = getOpacify(initColor, 0.4);
  return colorSet;
};

const getDarken = (color: string, tonalOffset = 0.1): string => {
  return darken(tonalOffset, color);
};
const getLighten = (color: string, tonalOffset = 0.1): string => {
  return lighten(tonalOffset, color);
};
const getOpacify = (color: string, tonalOffset = 0.1): string => {
  return transparentize(tonalOffset, color);
};
const getActColor = ({ color, theme, tonalOffset = 0.1 }: ColorProps) => {
  const tonalOffsetLight = tonalOffset;
  const tonalOffsetDark = tonalOffset * 1.5;
  if (theme === 'light') {
    return darken(tonalOffsetLight, color);
  }

  return darken(tonalOffsetDark, color);
};

export default createColors;
