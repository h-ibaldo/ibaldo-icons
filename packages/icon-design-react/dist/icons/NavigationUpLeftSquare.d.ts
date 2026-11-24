import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpLeftSquare: ForwardRefExoticComponent<NavigationUpLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpLeftSquare;
export { NavigationUpLeftSquare };
