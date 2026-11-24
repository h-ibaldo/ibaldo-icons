import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightCircleLarge: ForwardRefExoticComponent<ArrowRightCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightCircleLarge;
export { ArrowRightCircleLarge };
