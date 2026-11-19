import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryBoltLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryBoltLarge: ForwardRefExoticComponent<BatteryBoltLargeProps & RefAttributes<Svg>>;

export default BatteryBoltLarge;
export { BatteryBoltLarge };
