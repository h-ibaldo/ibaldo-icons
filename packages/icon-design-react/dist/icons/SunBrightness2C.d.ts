import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness2CProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness2C: ForwardRefExoticComponent<SunBrightness2CProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness2C;
export { SunBrightness2C };
