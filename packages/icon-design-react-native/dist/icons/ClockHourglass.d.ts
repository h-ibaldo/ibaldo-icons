import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockHourglassProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockHourglass: ForwardRefExoticComponent<ClockHourglassProps & RefAttributes<Svg>>;

export default ClockHourglass;
export { ClockHourglass };
