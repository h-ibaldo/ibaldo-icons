import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpSquare: ForwardRefExoticComponent<NavigationUpSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpSquare;
export { NavigationUpSquare };
