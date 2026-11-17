import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftCircle: ForwardRefExoticComponent<ArrowDownLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftCircle;
export { ArrowDownLeftCircle };
