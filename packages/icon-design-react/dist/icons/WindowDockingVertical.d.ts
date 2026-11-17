import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingVertical: ForwardRefExoticComponent<WindowDockingVerticalProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingVertical;
export { WindowDockingVertical };
