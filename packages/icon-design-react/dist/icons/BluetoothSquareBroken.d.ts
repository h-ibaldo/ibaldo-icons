import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothSquareBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothSquareBroken: ForwardRefExoticComponent<BluetoothSquareBrokenProps & RefAttributes<SVGSVGElement>>;

export default BluetoothSquareBroken;
export { BluetoothSquareBroken };
