import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapLeftDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapLeftDotted: ForwardRefExoticComponent<WindowOverlapLeftDottedProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapLeftDotted;
export { WindowOverlapLeftDotted };
