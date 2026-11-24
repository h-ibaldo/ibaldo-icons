import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothOffNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothOffNarrow: ForwardRefExoticComponent<BluetoothOffNarrowProps & RefAttributes<SVGSVGElement>>;

export default BluetoothOffNarrow;
export { BluetoothOffNarrow };
