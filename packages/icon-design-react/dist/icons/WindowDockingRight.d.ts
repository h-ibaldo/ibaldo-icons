import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDockingRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDockingRight: ForwardRefExoticComponent<WindowDockingRightProps & RefAttributes<SVGSVGElement>>;

export default WindowDockingRight;
export { WindowDockingRight };
