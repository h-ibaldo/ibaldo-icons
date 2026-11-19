import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BluetoothOffPillBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BluetoothOffPillBroken: ForwardRefExoticComponent<BluetoothOffPillBrokenProps & RefAttributes<Svg>>;

export default BluetoothOffPillBroken;
export { BluetoothOffPillBroken };
