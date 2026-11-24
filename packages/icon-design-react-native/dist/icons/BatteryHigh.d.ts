import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryHighProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryHigh: ForwardRefExoticComponent<BatteryHighProps & RefAttributes<Svg>>;

export default BatteryHigh;
export { BatteryHigh };
