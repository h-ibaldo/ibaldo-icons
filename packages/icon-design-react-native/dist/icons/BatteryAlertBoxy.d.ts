import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BatteryAlertBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BatteryAlertBoxy: ForwardRefExoticComponent<BatteryAlertBoxyProps & RefAttributes<Svg>>;

export default BatteryAlertBoxy;
export { BatteryAlertBoxy };
