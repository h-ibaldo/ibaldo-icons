import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpRightCircle: ForwardRefExoticComponent<NavigationUpRightCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpRightCircle;
export { NavigationUpRightCircle };
