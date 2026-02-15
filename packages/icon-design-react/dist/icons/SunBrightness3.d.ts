import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness3: ForwardRefExoticComponent<SunBrightness3Props & RefAttributes<SVGSVGElement>>;

export default SunBrightness3;
export { SunBrightness3 };
