import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness4CProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness4C: ForwardRefExoticComponent<SunBrightness4CProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness4C;
export { SunBrightness4C };
