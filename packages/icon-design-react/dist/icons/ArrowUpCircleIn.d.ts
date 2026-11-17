import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleIn: ForwardRefExoticComponent<ArrowUpCircleInProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleIn;
export { ArrowUpCircleIn };
