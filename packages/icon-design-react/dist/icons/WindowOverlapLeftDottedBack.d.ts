import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapLeftDottedBackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapLeftDottedBack: ForwardRefExoticComponent<WindowOverlapLeftDottedBackProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapLeftDottedBack;
export { WindowOverlapLeftDottedBack };
