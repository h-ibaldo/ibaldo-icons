import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunMoonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunMoon: ForwardRefExoticComponent<SunMoonProps & RefAttributes<SVGSVGElement>>;

export default SunMoon;
export { SunMoon };
