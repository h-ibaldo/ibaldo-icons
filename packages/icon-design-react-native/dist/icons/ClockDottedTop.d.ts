import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDottedTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDottedTop: ForwardRefExoticComponent<ClockDottedTopProps & RefAttributes<Svg>>;

export default ClockDottedTop;
export { ClockDottedTop };
