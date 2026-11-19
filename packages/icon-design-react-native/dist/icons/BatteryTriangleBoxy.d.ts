import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryTriangleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryTriangleBoxy: ForwardRefExoticComponent<BatteryTriangleBoxyProps & RefAttributes<Svg>>;

export default BatteryTriangleBoxy;
export { BatteryTriangleBoxy };
