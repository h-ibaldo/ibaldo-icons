import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness7BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness7B: ForwardRefExoticComponent<SunBrightness7BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness7B;
export { SunBrightness7B };
