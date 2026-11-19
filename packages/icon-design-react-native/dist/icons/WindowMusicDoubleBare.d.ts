import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicDoubleBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusicDoubleBare: ForwardRefExoticComponent<WindowMusicDoubleBareProps & RefAttributes<Svg>>;

export default WindowMusicDoubleBare;
export { WindowMusicDoubleBare };
