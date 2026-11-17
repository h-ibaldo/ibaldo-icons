import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowXCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowXCenter: ForwardRefExoticComponent<WindowXCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowXCenter;
export { WindowXCenter };
