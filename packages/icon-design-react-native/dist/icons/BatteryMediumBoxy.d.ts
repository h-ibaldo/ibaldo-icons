import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryMediumBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryMediumBoxy: ForwardRefExoticComponent<BatteryMediumBoxyProps & RefAttributes<Svg>>;

export default BatteryMediumBoxy;
export { BatteryMediumBoxy };
