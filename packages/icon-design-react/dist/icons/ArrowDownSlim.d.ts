import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownSlim: ForwardRefExoticComponent<ArrowDownSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownSlim;
export { ArrowDownSlim };
