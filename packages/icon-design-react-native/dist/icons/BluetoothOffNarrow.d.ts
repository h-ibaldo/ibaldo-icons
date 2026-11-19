import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothOffNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothOffNarrow: ForwardRefExoticComponent<BluetoothOffNarrowProps & RefAttributes<Svg>>;

export default BluetoothOffNarrow;
export { BluetoothOffNarrow };
