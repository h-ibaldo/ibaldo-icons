import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothRingNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothRingNarrow: ForwardRefExoticComponent<BluetoothRingNarrowProps & RefAttributes<SVGSVGElement>>;

export default BluetoothRingNarrow;
export { BluetoothRingNarrow };
