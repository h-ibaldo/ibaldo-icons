import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftRightCircle: ForwardRefExoticComponent<ArrowLeftRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftRightCircle;
export { ArrowLeftRightCircle };
