import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightSlim: ForwardRefExoticComponent<ArrowRightSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightSlim;
export { ArrowRightSlim };
