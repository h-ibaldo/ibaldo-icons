import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMusicBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMusicBare: ForwardRefExoticComponent<WindowMusicBareProps & RefAttributes<Svg>>;

export default WindowMusicBare;
export { WindowMusicBare };
