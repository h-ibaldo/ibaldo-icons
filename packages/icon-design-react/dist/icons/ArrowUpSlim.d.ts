import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpSlim: ForwardRefExoticComponent<ArrowUpSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpSlim;
export { ArrowUpSlim };
