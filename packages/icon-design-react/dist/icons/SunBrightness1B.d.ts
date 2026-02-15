import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness1BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness1B: ForwardRefExoticComponent<SunBrightness1BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness1B;
export { SunBrightness1B };
