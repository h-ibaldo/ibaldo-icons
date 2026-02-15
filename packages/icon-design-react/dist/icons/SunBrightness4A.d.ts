import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness4AProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness4A: ForwardRefExoticComponent<SunBrightness4AProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness4A;
export { SunBrightness4A };
