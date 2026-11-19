import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothRectangleRoundBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothRectangleRoundBroken: ForwardRefExoticComponent<BluetoothRectangleRoundBrokenProps & RefAttributes<Svg>>;

export default BluetoothRectangleRoundBroken;
export { BluetoothRectangleRoundBroken };
