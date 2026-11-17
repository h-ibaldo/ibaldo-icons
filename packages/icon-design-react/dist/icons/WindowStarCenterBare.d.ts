import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStarCenterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStarCenterBare: ForwardRefExoticComponent<WindowStarCenterBareProps & RefAttributes<SVGSVGElement>>;

export default WindowStarCenterBare;
export { WindowStarCenterBare };
