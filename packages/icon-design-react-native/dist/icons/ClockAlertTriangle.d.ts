import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockAlertTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockAlertTriangle: ForwardRefExoticComponent<ClockAlertTriangleProps & RefAttributes<Svg>>;

export default ClockAlertTriangle;
export { ClockAlertTriangle };
