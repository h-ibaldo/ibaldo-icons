import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness2AProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness2A: ForwardRefExoticComponent<SunBrightness2AProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness2A;
export { SunBrightness2A };
