import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareXDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareXDouble: ForwardRefExoticComponent<ScreenShareXDoubleProps & RefAttributes<Svg>>;

export default ScreenShareXDouble;
export { ScreenShareXDouble };
