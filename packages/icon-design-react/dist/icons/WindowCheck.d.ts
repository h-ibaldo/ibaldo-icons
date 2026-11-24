import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCheck: ForwardRefExoticComponent<WindowCheckProps & RefAttributes<SVGSVGElement>>;

export default WindowCheck;
export { WindowCheck };
