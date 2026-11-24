import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothOff: ForwardRefExoticComponent<BluetoothOffProps & RefAttributes<SVGSVGElement>>;

export default BluetoothOff;
export { BluetoothOff };
