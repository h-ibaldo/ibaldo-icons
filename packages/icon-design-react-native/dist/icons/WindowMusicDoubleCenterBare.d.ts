import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicDoubleCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusicDoubleCenterBare: ForwardRefExoticComponent<WindowMusicDoubleCenterBareProps & RefAttributes<Svg>>;

export default WindowMusicDoubleCenterBare;
export { WindowMusicDoubleCenterBare };
