import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangleAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangleAlt: ForwardRefExoticComponent<WarningTriangleAltProps & RefAttributes<SVGSVGElement>>;

export default WarningTriangleAlt;
export { WarningTriangleAlt };
