import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EarbudsBluetoothProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EarbudsBluetooth: ForwardRefExoticComponent<EarbudsBluetoothProps & RefAttributes<Svg>>;

export default EarbudsBluetooth;
export { EarbudsBluetooth };
