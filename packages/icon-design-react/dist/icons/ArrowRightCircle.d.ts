import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightCircle: ForwardRefExoticComponent<ArrowRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightCircle;
export { ArrowRightCircle };
