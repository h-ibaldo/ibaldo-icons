import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothPillProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothPill: ForwardRefExoticComponent<BluetoothPillProps & RefAttributes<Svg>>;

export default BluetoothPill;
export { BluetoothPill };
