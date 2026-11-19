import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockPinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockPin: ForwardRefExoticComponent<ClockPinProps & RefAttributes<Svg>>;

export default ClockPin;
export { ClockPin };
