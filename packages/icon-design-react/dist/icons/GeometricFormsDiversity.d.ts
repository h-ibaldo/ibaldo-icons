import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GeometricFormsDiversityProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GeometricFormsDiversity: ForwardRefExoticComponent<GeometricFormsDiversityProps & RefAttributes<SVGSVGElement>>;

export default GeometricFormsDiversity;
export { GeometricFormsDiversity };
