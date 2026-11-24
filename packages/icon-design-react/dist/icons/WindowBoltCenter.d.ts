import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBoltCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBoltCenter: ForwardRefExoticComponent<WindowBoltCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowBoltCenter;
export { WindowBoltCenter };
