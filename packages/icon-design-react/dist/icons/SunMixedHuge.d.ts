import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunMixedHugeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunMixedHuge: ForwardRefExoticComponent<SunMixedHugeProps & RefAttributes<SVGSVGElement>>;

export default SunMixedHuge;
export { SunMixedHuge };
