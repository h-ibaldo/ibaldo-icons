import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BluetoothDotDoubleCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BluetoothDotDoubleCircle: ForwardRefExoticComponent<BluetoothDotDoubleCircleProps & RefAttributes<SVGSVGElement>>;

export default BluetoothDotDoubleCircle;
export { BluetoothDotDoubleCircle };
