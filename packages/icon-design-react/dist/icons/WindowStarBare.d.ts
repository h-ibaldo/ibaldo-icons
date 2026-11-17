import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStarBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStarBare: ForwardRefExoticComponent<WindowStarBareProps & RefAttributes<SVGSVGElement>>;

export default WindowStarBare;
export { WindowStarBare };
