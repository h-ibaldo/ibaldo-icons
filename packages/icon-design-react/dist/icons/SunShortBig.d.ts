import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunShortBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunShortBig: ForwardRefExoticComponent<SunShortBigProps & RefAttributes<SVGSVGElement>>;

export default SunShortBig;
export { SunShortBig };
