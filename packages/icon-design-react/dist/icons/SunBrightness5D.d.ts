import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness5DProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness5D: ForwardRefExoticComponent<SunBrightness5DProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness5D;
export { SunBrightness5D };
