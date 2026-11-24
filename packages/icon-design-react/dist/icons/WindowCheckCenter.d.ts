import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCheckCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCheckCenter: ForwardRefExoticComponent<WindowCheckCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowCheckCenter;
export { WindowCheckCenter };
