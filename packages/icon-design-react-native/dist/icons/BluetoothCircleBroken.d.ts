import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothCircleBroken: ForwardRefExoticComponent<BluetoothCircleBrokenProps & RefAttributes<Svg>>;

export default BluetoothCircleBroken;
export { BluetoothCircleBroken };
