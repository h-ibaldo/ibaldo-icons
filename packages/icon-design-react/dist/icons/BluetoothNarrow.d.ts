import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothNarrow: ForwardRefExoticComponent<BluetoothNarrowProps & RefAttributes<SVGSVGElement>>;

export default BluetoothNarrow;
export { BluetoothNarrow };
