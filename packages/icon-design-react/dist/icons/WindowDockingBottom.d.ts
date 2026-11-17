import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingBottom: ForwardRefExoticComponent<WindowDockingBottomProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingBottom;
export { WindowDockingBottom };
