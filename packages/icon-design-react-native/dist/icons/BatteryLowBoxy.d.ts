import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryLowBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryLowBoxy: ForwardRefExoticComponent<BatteryLowBoxyProps & RefAttributes<Svg>>;

export default BatteryLowBoxy;
export { BatteryLowBoxy };
