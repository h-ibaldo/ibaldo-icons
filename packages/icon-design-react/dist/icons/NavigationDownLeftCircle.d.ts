import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationDownLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationDownLeftCircle: ForwardRefExoticComponent<NavigationDownLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationDownLeftCircle;
export { NavigationDownLeftCircle };
