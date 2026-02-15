import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightnessDProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightnessD: ForwardRefExoticComponent<SunBrightnessDProps & RefAttributes<SVGSVGElement>>;

export default SunBrightnessD;
export { SunBrightnessD };
