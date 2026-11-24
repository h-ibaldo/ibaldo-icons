import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronCornerStaggeredSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronCornerStaggeredSquare: ForwardRefExoticComponent<ChevronCornerStaggeredSquareProps & RefAttributes<SVGSVGElement>>;

export default ChevronCornerStaggeredSquare;
export { ChevronCornerStaggeredSquare };
