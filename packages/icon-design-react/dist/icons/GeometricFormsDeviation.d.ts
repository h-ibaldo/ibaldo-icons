import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GeometricFormsDeviationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GeometricFormsDeviation: ForwardRefExoticComponent<GeometricFormsDeviationProps & RefAttributes<SVGSVGElement>>;

export default GeometricFormsDeviation;
export { GeometricFormsDeviation };
