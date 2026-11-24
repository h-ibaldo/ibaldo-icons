import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothSmall: ForwardRefExoticComponent<BluetoothSmallProps & RefAttributes<Svg>>;

export default BluetoothSmall;
export { BluetoothSmall };
