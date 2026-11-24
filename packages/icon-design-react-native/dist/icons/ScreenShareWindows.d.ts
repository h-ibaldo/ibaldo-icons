import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareWindowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareWindows: ForwardRefExoticComponent<ScreenShareWindowsProps & RefAttributes<Svg>>;

export default ScreenShareWindows;
export { ScreenShareWindows };
