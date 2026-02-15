import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingRightDockingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingRightDocking: ForwardRefExoticComponent<WindowDockingRightDockingProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingRightDocking;
export { WindowDockingRightDocking };
