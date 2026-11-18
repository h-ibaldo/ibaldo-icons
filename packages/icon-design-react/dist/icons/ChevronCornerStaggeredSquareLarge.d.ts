import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronCornerStaggeredSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronCornerStaggeredSquareLarge: ForwardRefExoticComponent<ChevronCornerStaggeredSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronCornerStaggeredSquareLarge;
export { ChevronCornerStaggeredSquareLarge };
