import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsAllOutOfCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsAllOutOfCircle: ForwardRefExoticComponent<ArrowsAllOutOfCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowsAllOutOfCircle;
export { ArrowsAllOutOfCircle };
