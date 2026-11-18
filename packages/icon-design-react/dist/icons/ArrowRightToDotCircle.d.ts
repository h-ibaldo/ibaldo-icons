import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightToDotCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightToDotCircle: ForwardRefExoticComponent<ArrowRightToDotCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightToDotCircle;
export { ArrowRightToDotCircle };
