import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightnessBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightnessB: ForwardRefExoticComponent<SunBrightnessBProps & RefAttributes<SVGSVGElement>>;

export default SunBrightnessB;
export { SunBrightnessB };
