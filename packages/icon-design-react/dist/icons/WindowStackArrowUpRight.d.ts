import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStackArrowUpRight: ForwardRefExoticComponent<WindowStackArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default WindowStackArrowUpRight;
export { WindowStackArrowUpRight };
