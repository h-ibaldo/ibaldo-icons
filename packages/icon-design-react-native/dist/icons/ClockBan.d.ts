import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockBan: ForwardRefExoticComponent<ClockBanProps & RefAttributes<Svg>>;

export default ClockBan;
export { ClockBan };
