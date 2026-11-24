import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunSpokeLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunSpokeLarge: ForwardRefExoticComponent<SunSpokeLargeProps & RefAttributes<SVGSVGElement>>;

export default SunSpokeLarge;
export { SunSpokeLarge };
