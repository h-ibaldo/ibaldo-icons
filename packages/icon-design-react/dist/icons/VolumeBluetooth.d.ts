import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeBluetoothProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeBluetooth: ForwardRefExoticComponent<VolumeBluetoothProps & RefAttributes<SVGSVGElement>>;

export default VolumeBluetooth;
export { VolumeBluetooth };
