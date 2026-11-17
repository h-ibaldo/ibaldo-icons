import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunMixedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunMixed: ForwardRefExoticComponent<SunMixedProps & RefAttributes<SVGSVGElement>>;

export default SunMixed;
export { SunMixed };
