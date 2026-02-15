import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness4DProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness4D: ForwardRefExoticComponent<SunBrightness4DProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness4D;
export { SunBrightness4D };
