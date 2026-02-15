import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlaqueCategory1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlaqueCategory1: ForwardRefExoticComponent<PlaqueCategory1Props & RefAttributes<SVGSVGElement>>;

export default PlaqueCategory1;
export { PlaqueCategory1 };
