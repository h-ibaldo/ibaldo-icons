import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Compass: ForwardRefExoticComponent<CompassProps & RefAttributes<SVGSVGElement>>;

export default Compass;
export { Compass };
