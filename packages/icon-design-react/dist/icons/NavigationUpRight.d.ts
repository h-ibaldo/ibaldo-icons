import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpRight: ForwardRefExoticComponent<NavigationUpRightProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpRight;
export { NavigationUpRight };
