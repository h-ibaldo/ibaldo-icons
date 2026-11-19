import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryFullProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryFull: ForwardRefExoticComponent<BatteryFullProps & RefAttributes<Svg>>;

export default BatteryFull;
export { BatteryFull };
