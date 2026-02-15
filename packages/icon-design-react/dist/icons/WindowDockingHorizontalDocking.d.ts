import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingHorizontalDockingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingHorizontalDocking: ForwardRefExoticComponent<WindowDockingHorizontalDockingProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingHorizontalDocking;
export { WindowDockingHorizontalDocking };
