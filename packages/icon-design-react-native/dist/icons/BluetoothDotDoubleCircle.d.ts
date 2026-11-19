import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothDotDoubleCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothDotDoubleCircle: ForwardRefExoticComponent<BluetoothDotDoubleCircleProps & RefAttributes<Svg>>;

export default BluetoothDotDoubleCircle;
export { BluetoothDotDoubleCircle };
