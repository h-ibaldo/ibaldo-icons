import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSwipeRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSwipeRightSquare: ForwardRefExoticComponent<TouchScreenSwipeRightSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSwipeRightSquare;
export { TouchScreenSwipeRightSquare };
