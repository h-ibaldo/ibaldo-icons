import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnLeftCircle: ForwardRefExoticComponent<ArrowUturnLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnLeftCircle;
export { ArrowUturnLeftCircle };
