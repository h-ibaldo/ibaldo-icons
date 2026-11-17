import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingTop: ForwardRefExoticComponent<WindowDockingTopProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingTop;
export { WindowDockingTop };
