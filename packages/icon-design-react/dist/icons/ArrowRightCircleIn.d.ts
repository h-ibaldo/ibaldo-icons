import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightCircleInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightCircleIn: ForwardRefExoticComponent<ArrowRightCircleInProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightCircleIn;
export { ArrowRightCircleIn };
