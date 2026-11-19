import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSnoozeTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSnoozeTop: ForwardRefExoticComponent<ClockSnoozeTopProps & RefAttributes<Svg>>;

export default ClockSnoozeTop;
export { ClockSnoozeTop };
