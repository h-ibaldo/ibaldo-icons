import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpCircleX: ForwardRefExoticComponent<NavigationUpCircleXProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpCircleX;
export { NavigationUpCircleX };
