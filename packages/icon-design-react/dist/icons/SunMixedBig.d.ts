import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunMixedBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunMixedBig: ForwardRefExoticComponent<SunMixedBigProps & RefAttributes<SVGSVGElement>>;

export default SunMixedBig;
export { SunMixedBig };
