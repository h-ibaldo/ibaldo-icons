import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpCircleSegmented: ForwardRefExoticComponent<NavigationUpCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpCircleSegmented;
export { NavigationUpCircleSegmented };
