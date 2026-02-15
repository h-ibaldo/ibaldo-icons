import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GeometricFormsDiscrepancyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GeometricFormsDiscrepancy: ForwardRefExoticComponent<GeometricFormsDiscrepancyProps & RefAttributes<SVGSVGElement>>;

export default GeometricFormsDiscrepancy;
export { GeometricFormsDiscrepancy };
