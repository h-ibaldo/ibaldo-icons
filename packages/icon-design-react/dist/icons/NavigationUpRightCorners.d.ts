import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpRightCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpRightCorners: ForwardRefExoticComponent<NavigationUpRightCornersProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpRightCorners;
export { NavigationUpRightCorners };
