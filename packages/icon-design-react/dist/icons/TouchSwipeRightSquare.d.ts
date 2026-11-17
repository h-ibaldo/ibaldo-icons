import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeRightSquare: ForwardRefExoticComponent<TouchSwipeRightSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeRightSquare;
export { TouchSwipeRightSquare };
