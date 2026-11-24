import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothDotDoubleSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothDotDoubleSquare: ForwardRefExoticComponent<BluetoothDotDoubleSquareProps & RefAttributes<SVGSVGElement>>;

export default BluetoothDotDoubleSquare;
export { BluetoothDotDoubleSquare };
