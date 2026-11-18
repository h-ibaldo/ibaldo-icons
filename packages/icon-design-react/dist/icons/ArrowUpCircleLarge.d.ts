import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleLarge: ForwardRefExoticComponent<ArrowUpCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleLarge;
export { ArrowUpCircleLarge };
