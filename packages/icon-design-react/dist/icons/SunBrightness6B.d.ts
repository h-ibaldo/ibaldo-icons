import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness6BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness6B: ForwardRefExoticComponent<SunBrightness6BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness6B;
export { SunBrightness6B };
