import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownCircleLarge: ForwardRefExoticComponent<ChevronDownCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownCircleLarge;
export { ChevronDownCircleLarge };
