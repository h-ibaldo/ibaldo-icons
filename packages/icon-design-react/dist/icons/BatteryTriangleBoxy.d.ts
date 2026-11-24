import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryTriangleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryTriangleBoxy: ForwardRefExoticComponent<BatteryTriangleBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryTriangleBoxy;
export { BatteryTriangleBoxy };
