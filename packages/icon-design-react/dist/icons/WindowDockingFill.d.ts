import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingFillProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingFill: ForwardRefExoticComponent<WindowDockingFillProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingFill;
export { WindowDockingFill };
