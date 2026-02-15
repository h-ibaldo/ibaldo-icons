import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness3AProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness3A: ForwardRefExoticComponent<SunBrightness3AProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness3A;
export { SunBrightness3A };
