import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothPillProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothPill: ForwardRefExoticComponent<BluetoothPillProps & RefAttributes<SVGSVGElement>>;

export default BluetoothPill;
export { BluetoothPill };
