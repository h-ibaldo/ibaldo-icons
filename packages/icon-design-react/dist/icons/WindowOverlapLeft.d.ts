import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapLeft: ForwardRefExoticComponent<WindowOverlapLeftProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapLeft;
export { WindowOverlapLeft };
