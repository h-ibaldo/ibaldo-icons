import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothRectangleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothRectangleRound: ForwardRefExoticComponent<BluetoothRectangleRoundProps & RefAttributes<Svg>>;

export default BluetoothRectangleRound;
export { BluetoothRectangleRound };
