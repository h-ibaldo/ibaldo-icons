import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusicCenter: ForwardRefExoticComponent<WindowMusicCenterProps & RefAttributes<Svg>>;

export default WindowMusicCenter;
export { WindowMusicCenter };
