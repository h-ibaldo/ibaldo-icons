import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapRightDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapRightDotted: ForwardRefExoticComponent<WindowOverlapRightDottedProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapRightDotted;
export { WindowOverlapRightDotted };
