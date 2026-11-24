import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunShort: ForwardRefExoticComponent<SunShortProps & RefAttributes<SVGSVGElement>>;

export default SunShort;
export { SunShort };
