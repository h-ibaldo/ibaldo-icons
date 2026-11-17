import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeLeftSquare: ForwardRefExoticComponent<TouchSwipeLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeLeftSquare;
export { TouchSwipeLeftSquare };
