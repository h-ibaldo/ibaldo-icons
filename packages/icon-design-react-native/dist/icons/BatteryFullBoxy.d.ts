import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryFullBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryFullBoxy: ForwardRefExoticComponent<BatteryFullBoxyProps & RefAttributes<Svg>>;

export default BatteryFullBoxy;
export { BatteryFullBoxy };
