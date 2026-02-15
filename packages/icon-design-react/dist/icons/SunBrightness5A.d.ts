import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness5AProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness5A: ForwardRefExoticComponent<SunBrightness5AProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness5A;
export { SunBrightness5A };
