import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpDownStaggeredCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpDownStaggeredCircleLarge: ForwardRefExoticComponent<ChevronUpDownStaggeredCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpDownStaggeredCircleLarge;
export { ChevronUpDownStaggeredCircleLarge };
