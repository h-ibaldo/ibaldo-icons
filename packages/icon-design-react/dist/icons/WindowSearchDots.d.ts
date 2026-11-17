import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSearchDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSearchDots: ForwardRefExoticComponent<WindowSearchDotsProps & RefAttributes<SVGSVGElement>>;

export default WindowSearchDots;
export { WindowSearchDots };
