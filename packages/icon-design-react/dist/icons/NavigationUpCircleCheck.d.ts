import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpCircleCheck: ForwardRefExoticComponent<NavigationUpCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpCircleCheck;
export { NavigationUpCircleCheck };
