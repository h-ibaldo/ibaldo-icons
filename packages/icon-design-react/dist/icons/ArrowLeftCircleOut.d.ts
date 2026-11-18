import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftCircleOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftCircleOut: ForwardRefExoticComponent<ArrowLeftCircleOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftCircleOut;
export { ArrowLeftCircleOut };
