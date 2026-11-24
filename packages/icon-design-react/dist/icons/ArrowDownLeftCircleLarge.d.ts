import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftCircleLarge: ForwardRefExoticComponent<ArrowDownLeftCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftCircleLarge;
export { ArrowDownLeftCircleLarge };
