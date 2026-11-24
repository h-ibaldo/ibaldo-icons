import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothRectangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothRectangle: ForwardRefExoticComponent<BluetoothRectangleProps & RefAttributes<SVGSVGElement>>;

export default BluetoothRectangle;
export { BluetoothRectangle };
