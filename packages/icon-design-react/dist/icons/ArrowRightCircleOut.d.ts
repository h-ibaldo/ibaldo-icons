import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightCircleOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightCircleOut: ForwardRefExoticComponent<ArrowRightCircleOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightCircleOut;
export { ArrowRightCircleOut };
