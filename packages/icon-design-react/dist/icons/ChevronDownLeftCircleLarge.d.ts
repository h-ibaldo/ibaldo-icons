import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownLeftCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownLeftCircleLarge: ForwardRefExoticComponent<ChevronDownLeftCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownLeftCircleLarge;
export { ChevronDownLeftCircleLarge };
