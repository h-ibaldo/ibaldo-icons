import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleOut: ForwardRefExoticComponent<ArrowDownCircleOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleOut;
export { ArrowDownCircleOut };
