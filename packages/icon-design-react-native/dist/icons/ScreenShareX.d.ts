import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareX: ForwardRefExoticComponent<ScreenShareXProps & RefAttributes<Svg>>;

export default ScreenShareX;
export { ScreenShareX };
