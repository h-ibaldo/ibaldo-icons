import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunShortLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunShortLarge: ForwardRefExoticComponent<SunShortLargeProps & RefAttributes<SVGSVGElement>>;

export default SunShortLarge;
export { SunShortLarge };
