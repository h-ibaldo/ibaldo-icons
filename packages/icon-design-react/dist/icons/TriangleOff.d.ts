import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleOff: ForwardRefExoticComponent<TriangleOffProps & RefAttributes<SVGSVGElement>>;

export default TriangleOff;
export { TriangleOff };
