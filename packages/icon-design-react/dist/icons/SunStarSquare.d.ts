import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarSquare: ForwardRefExoticComponent<SunStarSquareProps & RefAttributes<SVGSVGElement>>;

export default SunStarSquare;
export { SunStarSquare };
