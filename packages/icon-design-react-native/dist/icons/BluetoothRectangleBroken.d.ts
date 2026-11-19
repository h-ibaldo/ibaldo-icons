import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothRectangleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothRectangleBroken: ForwardRefExoticComponent<BluetoothRectangleBrokenProps & RefAttributes<Svg>>;

export default BluetoothRectangleBroken;
export { BluetoothRectangleBroken };
