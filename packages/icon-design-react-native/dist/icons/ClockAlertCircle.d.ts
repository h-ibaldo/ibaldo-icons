import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockAlertCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockAlertCircle: ForwardRefExoticComponent<ClockAlertCircleProps & RefAttributes<Svg>>;

export default ClockAlertCircle;
export { ClockAlertCircle };
