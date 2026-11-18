import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftCircleOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftCircleOut: ForwardRefExoticComponent<ArrowDownLeftCircleOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftCircleOut;
export { ArrowDownLeftCircleOut };
