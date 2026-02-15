import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSwipeDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSwipeDownSquare: ForwardRefExoticComponent<TouchScreenSwipeDownSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSwipeDownSquare;
export { TouchScreenSwipeDownSquare };
