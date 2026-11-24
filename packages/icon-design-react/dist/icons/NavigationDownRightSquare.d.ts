import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationDownRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationDownRightSquare: ForwardRefExoticComponent<NavigationDownRightSquareProps & RefAttributes<SVGSVGElement>>;

export default NavigationDownRightSquare;
export { NavigationDownRightSquare };
