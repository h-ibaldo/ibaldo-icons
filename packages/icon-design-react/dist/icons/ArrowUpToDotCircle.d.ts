import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpToDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpToDotCircle: ForwardRefExoticComponent<ArrowUpToDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpToDotCircle;
export { ArrowUpToDotCircle };
