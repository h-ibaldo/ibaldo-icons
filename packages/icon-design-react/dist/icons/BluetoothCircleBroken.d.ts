import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothCircleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothCircleBroken: ForwardRefExoticComponent<BluetoothCircleBrokenProps & RefAttributes<SVGSVGElement>>;

export default BluetoothCircleBroken;
export { BluetoothCircleBroken };
