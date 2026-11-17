import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStar: ForwardRefExoticComponent<WindowStarProps & RefAttributes<SVGSVGElement>>;

export default WindowStar;
export { WindowStar };
