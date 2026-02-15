import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness5BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness5B: ForwardRefExoticComponent<SunBrightness5BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness5B;
export { SunBrightness5B };
