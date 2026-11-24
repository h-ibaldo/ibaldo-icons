import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryEmptyBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryEmptyBoxy: ForwardRefExoticComponent<BatteryEmptyBoxyProps & RefAttributes<Svg>>;

export default BatteryEmptyBoxy;
export { BatteryEmptyBoxy };
