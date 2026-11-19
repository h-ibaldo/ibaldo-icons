import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothCircle: ForwardRefExoticComponent<BluetoothCircleProps & RefAttributes<Svg>>;

export default BluetoothCircle;
export { BluetoothCircle };
