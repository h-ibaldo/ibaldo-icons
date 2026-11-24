import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationDownLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationDownLeftSquare: ForwardRefExoticComponent<NavigationDownLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationDownLeftSquare;
export { NavigationDownLeftSquare };
