import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareWindowsDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareWindowsDots: ForwardRefExoticComponent<ScreenShareWindowsDotsProps & RefAttributes<Svg>>;

export default ScreenShareWindowsDots;
export { ScreenShareWindowsDots };
