import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusicCenterBare: ForwardRefExoticComponent<WindowMusicCenterBareProps & RefAttributes<Svg>>;

export default WindowMusicCenterBare;
export { WindowMusicCenterBare };
