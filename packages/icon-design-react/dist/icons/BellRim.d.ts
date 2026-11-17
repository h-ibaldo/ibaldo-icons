import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRim: ForwardRefExoticComponent<BellRimProps & RefAttributes<SVGSVGElement>>;

export default BellRim;
export { BellRim };
