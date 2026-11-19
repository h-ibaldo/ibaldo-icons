import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserFilmProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserFilm: ForwardRefExoticComponent<BrowserFilmProps & RefAttributes<Svg>>;

export default BrowserFilm;
export { BrowserFilm };
