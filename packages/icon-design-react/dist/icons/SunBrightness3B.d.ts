import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness3BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness3B: ForwardRefExoticComponent<SunBrightness3BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness3B;
export { SunBrightness3B };
