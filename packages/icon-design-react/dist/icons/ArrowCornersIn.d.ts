import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornersInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornersIn: ForwardRefExoticComponent<ArrowCornersInProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornersIn;
export { ArrowCornersIn };
