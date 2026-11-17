import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationBarMenuArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationBarMenuArrow: ForwardRefExoticComponent<NavigationBarMenuArrowProps & RefAttributes<SVGSVGElement>>;

export default NavigationBarMenuArrow;
export { NavigationBarMenuArrow };
