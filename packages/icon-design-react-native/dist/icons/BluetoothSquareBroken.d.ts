import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothSquareBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothSquareBroken: ForwardRefExoticComponent<BluetoothSquareBrokenProps & RefAttributes<Svg>>;

export default BluetoothSquareBroken;
export { BluetoothSquareBroken };
