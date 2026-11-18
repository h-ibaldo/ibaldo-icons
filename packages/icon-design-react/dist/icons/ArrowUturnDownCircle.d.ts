import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnDownCircle: ForwardRefExoticComponent<ArrowUturnDownCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnDownCircle;
export { ArrowUturnDownCircle };
