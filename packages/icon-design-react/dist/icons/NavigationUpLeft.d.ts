import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpLeft: ForwardRefExoticComponent<NavigationUpLeftProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpLeft;
export { NavigationUpLeft };
