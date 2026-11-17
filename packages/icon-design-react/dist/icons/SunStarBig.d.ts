import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarBig: ForwardRefExoticComponent<SunStarBigProps & RefAttributes<SVGSVGElement>>;

export default SunStarBig;
export { SunStarBig };
