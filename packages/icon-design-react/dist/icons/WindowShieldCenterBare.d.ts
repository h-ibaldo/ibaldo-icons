import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowShieldCenterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowShieldCenterBare: ForwardRefExoticComponent<WindowShieldCenterBareProps & RefAttributes<SVGSVGElement>>;

export default WindowShieldCenterBare;
export { WindowShieldCenterBare };
