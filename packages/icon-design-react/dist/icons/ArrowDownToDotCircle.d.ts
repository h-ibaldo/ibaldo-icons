import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownToDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownToDotCircle: ForwardRefExoticComponent<ArrowDownToDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownToDotCircle;
export { ArrowDownToDotCircle };
