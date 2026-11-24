import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicDoubleCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusicDoubleCenter: ForwardRefExoticComponent<WindowMusicDoubleCenterProps & RefAttributes<Svg>>;

export default WindowMusicDoubleCenter;
export { WindowMusicDoubleCenter };
