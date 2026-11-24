import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockBanTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockBanTop: ForwardRefExoticComponent<ClockBanTopProps & RefAttributes<Svg>>;

export default ClockBanTop;
export { ClockBanTop };
