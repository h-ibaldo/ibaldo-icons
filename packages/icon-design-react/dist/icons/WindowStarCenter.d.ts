import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStarCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStarCenter: ForwardRefExoticComponent<WindowStarCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowStarCenter;
export { WindowStarCenter };
