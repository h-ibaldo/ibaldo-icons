import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness7CProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness7C: ForwardRefExoticComponent<SunBrightness7CProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness7C;
export { SunBrightness7C };
