import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightFromDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightFromDotCircle: ForwardRefExoticComponent<ArrowRightFromDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightFromDotCircle;
export { ArrowRightFromDotCircle };
