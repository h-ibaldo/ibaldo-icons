import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryBoltBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryBoltBoxy: ForwardRefExoticComponent<BatteryBoltBoxyProps & RefAttributes<Svg>>;

export default BatteryBoltBoxy;
export { BatteryBoltBoxy };
