import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSplit: ForwardRefExoticComponent<ClockSplitProps & RefAttributes<Svg>>;

export default ClockSplit;
export { ClockSplit };
