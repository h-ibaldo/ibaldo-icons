import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSwipeLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSwipeLeftSquare: ForwardRefExoticComponent<TouchScreenSwipeLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSwipeLeftSquare;
export { TouchScreenSwipeLeftSquare };
