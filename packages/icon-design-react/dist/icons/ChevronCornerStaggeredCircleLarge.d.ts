import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronCornerStaggeredCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronCornerStaggeredCircleLarge: ForwardRefExoticComponent<ChevronCornerStaggeredCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronCornerStaggeredCircleLarge;
export { ChevronCornerStaggeredCircleLarge };
