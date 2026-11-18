import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronCornerStaggeredCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronCornerStaggeredCircle: ForwardRefExoticComponent<ChevronCornerStaggeredCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronCornerStaggeredCircle;
export { ChevronCornerStaggeredCircle };
