import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationRightCircle: ForwardRefExoticComponent<NavigationRightCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationRightCircle;
export { NavigationRightCircle };
