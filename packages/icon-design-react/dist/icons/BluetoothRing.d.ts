import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothRing: ForwardRefExoticComponent<BluetoothRingProps & RefAttributes<SVGSVGElement>>;

export default BluetoothRing;
export { BluetoothRing };
