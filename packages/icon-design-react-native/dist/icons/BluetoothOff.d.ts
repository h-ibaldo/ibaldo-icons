import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothOff: ForwardRefExoticComponent<BluetoothOffProps & RefAttributes<Svg>>;

export default BluetoothOff;
export { BluetoothOff };
