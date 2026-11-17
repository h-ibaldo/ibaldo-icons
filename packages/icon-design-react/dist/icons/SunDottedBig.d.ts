import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDottedBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDottedBig: ForwardRefExoticComponent<SunDottedBigProps & RefAttributes<SVGSVGElement>>;

export default SunDottedBig;
export { SunDottedBig };
