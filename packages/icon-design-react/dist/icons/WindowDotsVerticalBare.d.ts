import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDotsVerticalBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDotsVerticalBare: ForwardRefExoticComponent<WindowDotsVerticalBareProps & RefAttributes<SVGSVGElement>>;

export default WindowDotsVerticalBare;
export { WindowDotsVerticalBare };
