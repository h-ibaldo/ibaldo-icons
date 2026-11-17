import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStar: ForwardRefExoticComponent<SunStarProps & RefAttributes<SVGSVGElement>>;

export default SunStar;
export { SunStar };
