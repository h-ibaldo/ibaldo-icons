import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingVerticalDockingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingVerticalDocking: ForwardRefExoticComponent<WindowDockingVerticalDockingProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingVerticalDocking;
export { WindowDockingVerticalDocking };
