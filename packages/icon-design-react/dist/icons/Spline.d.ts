import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SplineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Spline: ForwardRefExoticComponent<SplineProps & RefAttributes<SVGSVGElement>>;

export default Spline;
export { Spline };
