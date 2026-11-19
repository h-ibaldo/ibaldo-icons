import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockCircleDashed: ForwardRefExoticComponent<ClockCircleDashedProps & RefAttributes<Svg>>;

export default ClockCircleDashed;
export { ClockCircleDashed };
