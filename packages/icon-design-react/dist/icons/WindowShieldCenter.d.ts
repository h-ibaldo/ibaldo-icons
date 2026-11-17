import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowShieldCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowShieldCenter: ForwardRefExoticComponent<WindowShieldCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowShieldCenter;
export { WindowShieldCenter };
