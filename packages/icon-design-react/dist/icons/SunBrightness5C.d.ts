import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness5CProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness5C: ForwardRefExoticComponent<SunBrightness5CProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness5C;
export { SunBrightness5C };
