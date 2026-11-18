import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpLeftSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpLeftSharp: ForwardRefExoticComponent<NavigationUpLeftSharpProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpLeftSharp;
export { NavigationUpLeftSharp };
