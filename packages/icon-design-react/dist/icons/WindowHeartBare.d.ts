import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowHeartBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowHeartBare: ForwardRefExoticComponent<WindowHeartBareProps & RefAttributes<SVGSVGElement>>;

export default WindowHeartBare;
export { WindowHeartBare };
