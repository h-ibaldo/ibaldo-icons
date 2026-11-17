import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingHorizontal: ForwardRefExoticComponent<WindowDockingHorizontalProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingHorizontal;
export { WindowDockingHorizontal };
