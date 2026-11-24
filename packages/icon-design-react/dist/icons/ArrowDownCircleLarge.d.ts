import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleLarge: ForwardRefExoticComponent<ArrowDownCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleLarge;
export { ArrowDownCircleLarge };
