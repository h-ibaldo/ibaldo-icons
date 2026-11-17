import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDottedLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDottedLarge: ForwardRefExoticComponent<SunDottedLargeProps & RefAttributes<SVGSVGElement>>;

export default SunDottedLarge;
export { SunDottedLarge };
