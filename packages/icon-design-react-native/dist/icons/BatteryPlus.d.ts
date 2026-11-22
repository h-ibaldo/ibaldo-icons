import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryPlus: ForwardRefExoticComponent<BatteryPlusProps & RefAttributes<Svg>>;

export default BatteryPlus;
export { BatteryPlus };
