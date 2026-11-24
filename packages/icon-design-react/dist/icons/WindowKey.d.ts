import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKey: ForwardRefExoticComponent<WindowKeyProps & RefAttributes<SVGSVGElement>>;

export default WindowKey;
export { WindowKey };
