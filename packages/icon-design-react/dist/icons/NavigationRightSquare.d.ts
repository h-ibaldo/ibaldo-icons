import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationRightSquare: ForwardRefExoticComponent<NavigationRightSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationRightSquare;
export { NavigationRightSquare };
