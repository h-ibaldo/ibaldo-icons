import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronLeftCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronLeftCircleLarge: ForwardRefExoticComponent<ChevronLeftCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronLeftCircleLarge;
export { ChevronLeftCircleLarge };
