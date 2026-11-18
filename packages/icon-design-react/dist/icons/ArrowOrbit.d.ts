import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowOrbitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowOrbit: ForwardRefExoticComponent<ArrowOrbitProps & RefAttributes<SVGSVGElement>>;

export default ArrowOrbit;
export { ArrowOrbit };
