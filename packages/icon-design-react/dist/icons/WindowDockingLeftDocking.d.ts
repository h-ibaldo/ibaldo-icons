import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingLeftDockingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingLeftDocking: ForwardRefExoticComponent<WindowDockingLeftDockingProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingLeftDocking;
export { WindowDockingLeftDocking };
