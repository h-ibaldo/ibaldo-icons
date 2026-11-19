import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightCircleLarge: ForwardRefExoticComponent<ArrowUpRightCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightCircleLarge;
export { ArrowUpRightCircleLarge };
