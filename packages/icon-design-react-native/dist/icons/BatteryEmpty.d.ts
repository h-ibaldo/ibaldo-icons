import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryEmptyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryEmpty: ForwardRefExoticComponent<BatteryEmptyProps & RefAttributes<Svg>>;

export default BatteryEmpty;
export { BatteryEmpty };
