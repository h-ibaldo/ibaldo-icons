import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness2BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness2B: ForwardRefExoticComponent<SunBrightness2BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness2B;
export { SunBrightness2B };
