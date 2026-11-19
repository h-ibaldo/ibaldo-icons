import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothRingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothRing: ForwardRefExoticComponent<BluetoothRingProps & RefAttributes<Svg>>;

export default BluetoothRing;
export { BluetoothRing };
