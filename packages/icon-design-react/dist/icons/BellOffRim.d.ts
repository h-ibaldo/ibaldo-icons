import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOffRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOffRim: ForwardRefExoticComponent<BellOffRimProps & RefAttributes<SVGSVGElement>>;

export default BellOffRim;
export { BellOffRim };
