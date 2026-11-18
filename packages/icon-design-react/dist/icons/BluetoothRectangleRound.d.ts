import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothRectangleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothRectangleRound: ForwardRefExoticComponent<BluetoothRectangleRoundProps & RefAttributes<SVGSVGElement>>;

export default BluetoothRectangleRound;
export { BluetoothRectangleRound };
