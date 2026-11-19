import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryPlugBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryPlugBoxy: ForwardRefExoticComponent<BatteryPlugBoxyProps & RefAttributes<Svg>>;

export default BatteryPlugBoxy;
export { BatteryPlugBoxy };
