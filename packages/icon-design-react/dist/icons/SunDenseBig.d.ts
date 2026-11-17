import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunDenseBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunDenseBig: ForwardRefExoticComponent<SunDenseBigProps & RefAttributes<SVGSVGElement>>;

export default SunDenseBig;
export { SunDenseBig };
