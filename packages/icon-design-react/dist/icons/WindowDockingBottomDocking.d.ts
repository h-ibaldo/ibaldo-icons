import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingBottomDockingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingBottomDocking: ForwardRefExoticComponent<WindowDockingBottomDockingProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingBottomDocking;
export { WindowDockingBottomDocking };
