import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothNarrow: ForwardRefExoticComponent<BluetoothNarrowProps & RefAttributes<Svg>>;

export default BluetoothNarrow;
export { BluetoothNarrow };
