import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightA2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightA2: ForwardRefExoticComponent<SunBrightA2Props & RefAttributes<SVGSVGElement>>;

export default SunBrightA2;
export { SunBrightA2 };
