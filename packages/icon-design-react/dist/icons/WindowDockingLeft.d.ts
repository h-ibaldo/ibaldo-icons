import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingLeft: ForwardRefExoticComponent<WindowDockingLeftProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingLeft;
export { WindowDockingLeft };
