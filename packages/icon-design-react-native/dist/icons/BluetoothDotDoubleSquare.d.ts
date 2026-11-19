import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothDotDoubleSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothDotDoubleSquare: ForwardRefExoticComponent<BluetoothDotDoubleSquareProps & RefAttributes<Svg>>;

export default BluetoothDotDoubleSquare;
export { BluetoothDotDoubleSquare };
