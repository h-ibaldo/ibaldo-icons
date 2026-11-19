import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockXTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockXTop: ForwardRefExoticComponent<ClockXTopProps & RefAttributes<Svg>>;

export default ClockXTop;
export { ClockXTop };
