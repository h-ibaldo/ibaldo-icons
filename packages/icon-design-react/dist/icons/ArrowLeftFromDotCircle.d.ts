import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftFromDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftFromDotCircle: ForwardRefExoticComponent<ArrowLeftFromDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftFromDotCircle;
export { ArrowLeftFromDotCircle };
