import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationDownRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationDownRightCircle: ForwardRefExoticComponent<NavigationDownRightCircleProps & RefAttributes<SVGSVGElement>>;

export default NavigationDownRightCircle;
export { NavigationDownRightCircle };
