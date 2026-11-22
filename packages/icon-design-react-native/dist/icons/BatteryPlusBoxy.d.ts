import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryPlusBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryPlusBoxy: ForwardRefExoticComponent<BatteryPlusBoxyProps & RefAttributes<Svg>>;

export default BatteryPlusBoxy;
export { BatteryPlusBoxy };
