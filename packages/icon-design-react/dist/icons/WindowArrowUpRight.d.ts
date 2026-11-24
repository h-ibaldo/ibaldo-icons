import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowArrowUpRight: ForwardRefExoticComponent<WindowArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default WindowArrowUpRight;
export { WindowArrowUpRight };
