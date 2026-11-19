import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Bluetooth: ForwardRefExoticComponent<BluetoothProps & RefAttributes<Svg>>;

export default Bluetooth;
export { Bluetooth };
