import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpSharp: ForwardRefExoticComponent<NavigationUpSharpProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpSharp;
export { NavigationUpSharp };
