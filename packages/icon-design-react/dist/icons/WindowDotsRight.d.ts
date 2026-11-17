import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDotsRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDotsRight: ForwardRefExoticComponent<WindowDotsRightProps & RefAttributes<SVGSVGElement>>;

export default WindowDotsRight;
export { WindowDotsRight };
