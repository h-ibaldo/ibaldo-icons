import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationDownSquare: ForwardRefExoticComponent<NavigationDownSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationDownSquare;
export { NavigationDownSquare };
