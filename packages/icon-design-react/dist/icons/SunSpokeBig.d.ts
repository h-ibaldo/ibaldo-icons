import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunSpokeBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunSpokeBig: ForwardRefExoticComponent<SunSpokeBigProps & RefAttributes<SVGSVGElement>>;

export default SunSpokeBig;
export { SunSpokeBig };
