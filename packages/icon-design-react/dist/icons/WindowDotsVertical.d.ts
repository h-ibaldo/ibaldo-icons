import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDotsVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDotsVertical: ForwardRefExoticComponent<WindowDotsVerticalProps & RefAttributes<SVGSVGElement>>;

export default WindowDotsVertical;
export { WindowDotsVertical };
