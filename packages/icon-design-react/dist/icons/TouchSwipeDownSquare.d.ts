import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeDownSquare: ForwardRefExoticComponent<TouchSwipeDownSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeDownSquare;
export { TouchSwipeDownSquare };
