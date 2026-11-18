import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightSlim: ForwardRefExoticComponent<ArrowUpRightSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightSlim;
export { ArrowUpRightSlim };
