import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothRectangleRoundBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothRectangleRoundBroken: ForwardRefExoticComponent<BluetoothRectangleRoundBrokenProps & RefAttributes<SVGSVGElement>>;

export default BluetoothRectangleRoundBroken;
export { BluetoothRectangleRoundBroken };
