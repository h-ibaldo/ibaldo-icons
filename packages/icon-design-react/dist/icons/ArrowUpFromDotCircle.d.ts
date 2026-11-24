import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpFromDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpFromDotCircle: ForwardRefExoticComponent<ArrowUpFromDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpFromDotCircle;
export { ArrowUpFromDotCircle };
