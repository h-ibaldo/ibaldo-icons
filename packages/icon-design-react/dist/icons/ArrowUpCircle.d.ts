import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircle: ForwardRefExoticComponent<ArrowUpCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircle;
export { ArrowUpCircle };
