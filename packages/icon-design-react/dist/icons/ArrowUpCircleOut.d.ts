import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleOut: ForwardRefExoticComponent<ArrowUpCircleOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleOut;
export { ArrowUpCircleOut };
