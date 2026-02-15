import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness2: ForwardRefExoticComponent<SunBrightness2Props & RefAttributes<SVGSVGElement>>;

export default SunBrightness2;
export { SunBrightness2 };
