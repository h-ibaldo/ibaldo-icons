import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightFromPointCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightFromPointCircle: ForwardRefExoticComponent<ArrowRightFromPointCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightFromPointCircle;
export { ArrowRightFromPointCircle };
