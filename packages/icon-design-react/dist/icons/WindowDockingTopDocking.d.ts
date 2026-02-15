import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingTopDockingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingTopDocking: ForwardRefExoticComponent<WindowDockingTopDockingProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingTopDocking;
export { WindowDockingTopDocking };
