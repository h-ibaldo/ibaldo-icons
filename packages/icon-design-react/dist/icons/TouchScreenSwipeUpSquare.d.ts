import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSwipeUpSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSwipeUpSquare: ForwardRefExoticComponent<TouchScreenSwipeUpSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSwipeUpSquare;
export { TouchScreenSwipeUpSquare };
