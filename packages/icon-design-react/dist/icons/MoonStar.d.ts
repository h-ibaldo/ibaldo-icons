import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonStar: ForwardRefExoticComponent<MoonStarProps & RefAttributes<SVGSVGElement>>;

export default MoonStar;
export { MoonStar };
