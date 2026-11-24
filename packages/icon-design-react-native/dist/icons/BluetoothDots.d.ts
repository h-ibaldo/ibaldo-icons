import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothDots: ForwardRefExoticComponent<BluetoothDotsProps & RefAttributes<Svg>>;

export default BluetoothDots;
export { BluetoothDots };
