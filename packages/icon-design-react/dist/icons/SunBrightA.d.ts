import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightAProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightA: ForwardRefExoticComponent<SunBrightAProps & RefAttributes<SVGSVGElement>>;

export default SunBrightA;
export { SunBrightA };
