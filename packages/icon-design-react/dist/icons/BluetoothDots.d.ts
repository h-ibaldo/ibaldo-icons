import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothDots: ForwardRefExoticComponent<BluetoothDotsProps & RefAttributes<SVGSVGElement>>;

export default BluetoothDots;
export { BluetoothDots };
