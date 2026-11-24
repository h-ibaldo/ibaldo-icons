import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornersOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornersOut: ForwardRefExoticComponent<ArrowCornersOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornersOut;
export { ArrowCornersOut };
