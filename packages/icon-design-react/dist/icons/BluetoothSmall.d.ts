import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothSmall: ForwardRefExoticComponent<BluetoothSmallProps & RefAttributes<SVGSVGElement>>;

export default BluetoothSmall;
export { BluetoothSmall };
