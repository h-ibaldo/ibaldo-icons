import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowArrowUp: ForwardRefExoticComponent<WindowArrowUpProps & RefAttributes<SVGSVGElement>>;

export default WindowArrowUp;
export { WindowArrowUp };
