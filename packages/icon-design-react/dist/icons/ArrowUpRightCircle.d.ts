import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightCircle: ForwardRefExoticComponent<ArrowUpRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightCircle;
export { ArrowUpRightCircle };
