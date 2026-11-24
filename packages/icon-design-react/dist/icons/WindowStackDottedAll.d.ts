import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackDottedAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStackDottedAll: ForwardRefExoticComponent<WindowStackDottedAllProps & RefAttributes<SVGSVGElement>>;

export default WindowStackDottedAll;
export { WindowStackDottedAll };
