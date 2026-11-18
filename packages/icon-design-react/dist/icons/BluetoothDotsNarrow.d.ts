import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothDotsNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothDotsNarrow: ForwardRefExoticComponent<BluetoothDotsNarrowProps & RefAttributes<SVGSVGElement>>;

export default BluetoothDotsNarrow;
export { BluetoothDotsNarrow };
