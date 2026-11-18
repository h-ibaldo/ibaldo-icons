import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothDotDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothDotDouble: ForwardRefExoticComponent<BluetoothDotDoubleProps & RefAttributes<SVGSVGElement>>;

export default BluetoothDotDouble;
export { BluetoothDotDouble };
