import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothRectangleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothRectangleBroken: ForwardRefExoticComponent<BluetoothRectangleBrokenProps & RefAttributes<SVGSVGElement>>;

export default BluetoothRectangleBroken;
export { BluetoothRectangleBroken };
