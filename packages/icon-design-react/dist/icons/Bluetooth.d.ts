import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bluetooth: ForwardRefExoticComponent<BluetoothProps & RefAttributes<SVGSVGElement>>;

export default Bluetooth;
export { Bluetooth };
