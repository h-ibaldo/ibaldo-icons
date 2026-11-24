import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareWindowsOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareWindowsOff: ForwardRefExoticComponent<ScreenShareWindowsOffProps & RefAttributes<Svg>>;

export default ScreenShareWindowsOff;
export { ScreenShareWindowsOff };
