import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSnoozeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSnooze: ForwardRefExoticComponent<BellSnoozeProps & RefAttributes<Svg>>;

export default BellSnooze;
export { BellSnooze };
