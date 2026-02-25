import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GeometricFormsVariation2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GeometricFormsVariation2: ForwardRefExoticComponent<GeometricFormsVariation2Props & RefAttributes<SVGSVGElement>>;

export default GeometricFormsVariation2;
export { GeometricFormsVariation2 };
