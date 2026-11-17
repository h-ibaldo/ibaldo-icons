import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronRightLeftStaggeredSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronRightLeftStaggeredSquare: ForwardRefExoticComponent<ChevronRightLeftStaggeredSquareProps & RefAttributes<SVGSVGElement>>;

export default ChevronRightLeftStaggeredSquare;
export { ChevronRightLeftStaggeredSquare };
