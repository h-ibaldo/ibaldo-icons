import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryBoltLargeSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryBoltLargeSlanted: ForwardRefExoticComponent<BatteryBoltLargeSlantedProps & RefAttributes<Svg>>;

export default BatteryBoltLargeSlanted;
export { BatteryBoltLargeSlanted };
