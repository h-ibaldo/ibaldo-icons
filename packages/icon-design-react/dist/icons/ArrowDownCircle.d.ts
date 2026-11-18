import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircle: ForwardRefExoticComponent<ArrowDownCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircle;
export { ArrowDownCircle };
