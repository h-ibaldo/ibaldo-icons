import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothSquare: ForwardRefExoticComponent<BluetoothSquareProps & RefAttributes<SVGSVGElement>>;

export default BluetoothSquare;
export { BluetoothSquare };
