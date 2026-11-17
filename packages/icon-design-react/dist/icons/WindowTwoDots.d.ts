import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowTwoDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowTwoDots: ForwardRefExoticComponent<WindowTwoDotsProps & RefAttributes<SVGSVGElement>>;

export default WindowTwoDots;
export { WindowTwoDots };
