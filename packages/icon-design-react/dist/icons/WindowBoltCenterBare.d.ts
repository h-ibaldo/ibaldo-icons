import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBoltCenterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBoltCenterBare: ForwardRefExoticComponent<WindowBoltCenterBareProps & RefAttributes<SVGSVGElement>>;

export default WindowBoltCenterBare;
export { WindowBoltCenterBare };
