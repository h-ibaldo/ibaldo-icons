import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpRightSquare: ForwardRefExoticComponent<NavigationUpRightSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpRightSquare;
export { NavigationUpRightSquare };
