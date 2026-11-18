import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationDownCircle: ForwardRefExoticComponent<NavigationDownCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationDownCircle;
export { NavigationDownCircle };
