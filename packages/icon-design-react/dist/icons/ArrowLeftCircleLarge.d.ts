import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftCircleLarge: ForwardRefExoticComponent<ArrowLeftCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftCircleLarge;
export { ArrowLeftCircleLarge };
