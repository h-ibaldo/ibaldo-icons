import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusic: ForwardRefExoticComponent<WindowMusicProps & RefAttributes<Svg>>;

export default WindowMusic;
export { WindowMusic };
