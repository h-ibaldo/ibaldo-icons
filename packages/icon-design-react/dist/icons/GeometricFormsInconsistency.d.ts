import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GeometricFormsInconsistencyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GeometricFormsInconsistency: ForwardRefExoticComponent<GeometricFormsInconsistencyProps & RefAttributes<SVGSVGElement>>;

export default GeometricFormsInconsistency;
export { GeometricFormsInconsistency };
