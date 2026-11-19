import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothDotDoubleNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothDotDoubleNarrow: ForwardRefExoticComponent<BluetoothDotDoubleNarrowProps & RefAttributes<Svg>>;

export default BluetoothDotDoubleNarrow;
export { BluetoothDotDoubleNarrow };
