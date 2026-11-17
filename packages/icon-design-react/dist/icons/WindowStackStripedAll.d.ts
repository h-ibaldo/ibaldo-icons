import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackStripedAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStackStripedAll: ForwardRefExoticComponent<WindowStackStripedAllProps & RefAttributes<SVGSVGElement>>;

export default WindowStackStripedAll;
export { WindowStackStripedAll };
