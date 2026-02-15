import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness1: ForwardRefExoticComponent<SunBrightness1Props & RefAttributes<SVGSVGElement>>;

export default SunBrightness1;
export { SunBrightness1 };
