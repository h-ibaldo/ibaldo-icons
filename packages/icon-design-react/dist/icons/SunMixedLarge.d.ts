import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunMixedLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunMixedLarge: ForwardRefExoticComponent<SunMixedLargeProps & RefAttributes<SVGSVGElement>>;

export default SunMixedLarge;
export { SunMixedLarge };
