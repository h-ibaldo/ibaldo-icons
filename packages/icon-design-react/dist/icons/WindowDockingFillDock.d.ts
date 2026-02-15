import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingFillDockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingFillDock: ForwardRefExoticComponent<WindowDockingFillDockProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingFillDock;
export { WindowDockingFillDock };
