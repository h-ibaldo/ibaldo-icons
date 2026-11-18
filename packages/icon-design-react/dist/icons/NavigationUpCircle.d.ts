import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpCircle: ForwardRefExoticComponent<NavigationUpCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpCircle;
export { NavigationUpCircle };
