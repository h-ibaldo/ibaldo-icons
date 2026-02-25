import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightnessD2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightnessD2: ForwardRefExoticComponent<SunBrightnessD2Props & RefAttributes<SVGSVGElement>>;

export default SunBrightnessD2;
export { SunBrightnessD2 };
