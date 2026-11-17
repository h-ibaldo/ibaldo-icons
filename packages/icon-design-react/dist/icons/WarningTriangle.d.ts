import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangle: ForwardRefExoticComponent<WarningTriangleProps & RefAttributes<SVGSVGElement>>;

export default WarningTriangle;
export { WarningTriangle };
