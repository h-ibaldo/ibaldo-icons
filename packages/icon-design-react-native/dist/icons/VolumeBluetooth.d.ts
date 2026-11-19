import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeBluetoothProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeBluetooth: ForwardRefExoticComponent<VolumeBluetoothProps & RefAttributes<Svg>>;

export default VolumeBluetooth;
export { VolumeBluetooth };
