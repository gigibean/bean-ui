import { ThemeTypeProps } from 'index';
import { darken, lighten } from 'polished';
import { darkPallete, lightPallete } from './pallete';

interface ColorProps {
  color: string;
  theme: ThemeTypeProps;
  tonalOffset?: number;
}

const createColors = ({ color, theme, tonalOffset }: ColorProps): object => {
  const pallete = theme === 'dark' ? darkPallete : lightPallete;
  const colorSet = {
    main: color,
    text: pallete.text,
    action: pallete.action,
    paper: pallete.background.dufault,
    divider: pallete.divider,
    hover: '',
    active: '',
  };
  if (theme === 'dark') colorSet.main = getLighten(color);
  colorSet.hover = getActColor({ color, theme, tonalOffset: tonalOffset ? tonalOffset : 0.2 });
  colorSet.active = getActColor({
    color,
    theme,
    tonalOffset: tonalOffset ? tonalOffset * 2.5 : 0.5,
  });
  return colorSet;
};

const getLighten = (color: string, tonalOffset = 0.3): string => {
  return lighten(tonalOffset, color);
};
const getActColor = ({ color, theme, tonalOffset = 0.2 }: ColorProps) => {
  const tonalOffsetLight = tonalOffset;
  const tonalOffsetDark = tonalOffset * 1.5;
  if (theme === 'light') {
    return darken(tonalOffsetLight, color);
  }

  return darken(tonalOffsetDark, color);
};

export default createColors;
