import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpDownStaggeredSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpDownStaggeredSquareLarge: ForwardRefExoticComponent<ChevronUpDownStaggeredSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpDownStaggeredSquareLarge;
export { ChevronUpDownStaggeredSquareLarge };
