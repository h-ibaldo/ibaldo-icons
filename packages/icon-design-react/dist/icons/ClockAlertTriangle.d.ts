import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockAlertTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockAlertTriangle: ForwardRefExoticComponent<ClockAlertTriangleProps & RefAttributes<SVGSVGElement>>;

export default ClockAlertTriangle;
export { ClockAlertTriangle };
