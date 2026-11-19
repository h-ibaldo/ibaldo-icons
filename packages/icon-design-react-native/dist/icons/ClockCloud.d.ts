import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockCloudProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockCloud: ForwardRefExoticComponent<ClockCloudProps & RefAttributes<Svg>>;

export default ClockCloud;
export { ClockCloud };
