import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness4BProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness4B: ForwardRefExoticComponent<SunBrightness4BProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness4B;
export { SunBrightness4B };
