import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUp: ForwardRefExoticComponent<NavigationUpProps & RefAttributes<SVGSVGElement>>;

export default NavigationUp;
export { NavigationUp };
