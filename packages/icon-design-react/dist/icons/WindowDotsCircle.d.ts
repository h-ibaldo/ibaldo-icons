import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDotsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDotsCircle: ForwardRefExoticComponent<WindowDotsCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowDotsCircle;
export { WindowDotsCircle };
