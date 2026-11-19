import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryMediumProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryMedium: ForwardRefExoticComponent<BatteryMediumProps & RefAttributes<Svg>>;

export default BatteryMedium;
export { BatteryMedium };
