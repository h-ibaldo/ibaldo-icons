import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationLeftSquare: ForwardRefExoticComponent<NavigationLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationLeftSquare;
export { NavigationLeftSquare };
