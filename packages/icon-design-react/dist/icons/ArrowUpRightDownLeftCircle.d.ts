import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightDownLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightDownLeftCircle: ForwardRefExoticComponent<ArrowUpRightDownLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightDownLeftCircle;
export { ArrowUpRightDownLeftCircle };
