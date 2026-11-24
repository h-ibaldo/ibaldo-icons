import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownFromDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownFromDotCircle: ForwardRefExoticComponent<ArrowDownFromDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownFromDotCircle;
export { ArrowDownFromDotCircle };
