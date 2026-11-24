import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryLowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryLow: ForwardRefExoticComponent<BatteryLowProps & RefAttributes<Svg>>;

export default BatteryLow;
export { BatteryLow };
