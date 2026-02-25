import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness32: ForwardRefExoticComponent<SunBrightness32Props & RefAttributes<SVGSVGElement>>;

export default SunBrightness32;
export { SunBrightness32 };
