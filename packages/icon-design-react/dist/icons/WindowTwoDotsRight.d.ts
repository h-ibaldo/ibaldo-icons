import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowTwoDotsRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowTwoDotsRight: ForwardRefExoticComponent<WindowTwoDotsRightProps & RefAttributes<SVGSVGElement>>;

export default WindowTwoDotsRight;
export { WindowTwoDotsRight };
