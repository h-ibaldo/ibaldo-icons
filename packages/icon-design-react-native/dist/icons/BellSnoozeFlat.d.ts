import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSnoozeFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSnoozeFlat: ForwardRefExoticComponent<BellSnoozeFlatProps & RefAttributes<Svg>>;

export default BellSnoozeFlat;
export { BellSnoozeFlat };
