import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothDotsNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothDotsNarrow: ForwardRefExoticComponent<BluetoothDotsNarrowProps & RefAttributes<Svg>>;

export default BluetoothDotsNarrow;
export { BluetoothDotsNarrow };
