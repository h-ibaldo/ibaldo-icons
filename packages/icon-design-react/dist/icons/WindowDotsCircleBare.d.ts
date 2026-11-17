import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDotsCircleBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDotsCircleBare: ForwardRefExoticComponent<WindowDotsCircleBareProps & RefAttributes<SVGSVGElement>>;

export default WindowDotsCircleBare;
export { WindowDotsCircleBare };
