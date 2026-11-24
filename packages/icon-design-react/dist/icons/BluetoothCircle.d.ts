import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothCircle: ForwardRefExoticComponent<BluetoothCircleProps & RefAttributes<SVGSVGElement>>;

export default BluetoothCircle;
export { BluetoothCircle };
