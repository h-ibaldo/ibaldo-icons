import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryMinusPlusBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryMinusPlusBoxy: ForwardRefExoticComponent<BatteryMinusPlusBoxyProps & RefAttributes<Svg>>;

export default BatteryMinusPlusBoxy;
export { BatteryMinusPlusBoxy };
