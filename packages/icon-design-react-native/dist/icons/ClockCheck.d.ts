import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockCheck: ForwardRefExoticComponent<ClockCheckProps & RefAttributes<Svg>>;

export default ClockCheck;
export { ClockCheck };
