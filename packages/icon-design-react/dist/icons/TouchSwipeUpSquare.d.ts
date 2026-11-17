import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeUpSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeUpSquare: ForwardRefExoticComponent<TouchSwipeUpSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeUpSquare;
export { TouchSwipeUpSquare };
