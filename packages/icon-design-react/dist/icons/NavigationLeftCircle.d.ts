import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationLeftCircle: ForwardRefExoticComponent<NavigationLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationLeftCircle;
export { NavigationLeftCircle };
