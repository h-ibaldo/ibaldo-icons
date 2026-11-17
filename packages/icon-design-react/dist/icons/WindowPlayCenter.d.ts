import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlayCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlayCenter: ForwardRefExoticComponent<WindowPlayCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowPlayCenter;
export { WindowPlayCenter };
