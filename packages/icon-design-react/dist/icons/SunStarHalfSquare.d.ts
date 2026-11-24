import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarHalfSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarHalfSquare: ForwardRefExoticComponent<SunStarHalfSquareProps & RefAttributes<SVGSVGElement>>;

export default SunStarHalfSquare;
export { SunStarHalfSquare };
