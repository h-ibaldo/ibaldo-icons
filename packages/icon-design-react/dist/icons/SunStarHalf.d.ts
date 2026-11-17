import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarHalf: ForwardRefExoticComponent<SunStarHalfProps & RefAttributes<SVGSVGElement>>;

export default SunStarHalf;
export { SunStarHalf };
