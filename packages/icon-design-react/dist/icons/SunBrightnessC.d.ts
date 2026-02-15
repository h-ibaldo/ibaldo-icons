import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightnessCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightnessC: ForwardRefExoticComponent<SunBrightnessCProps & RefAttributes<SVGSVGElement>>;

export default SunBrightnessC;
export { SunBrightnessC };
