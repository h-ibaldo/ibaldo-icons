import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowHeartCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowHeartCenter: ForwardRefExoticComponent<WindowHeartCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowHeartCenter;
export { WindowHeartCenter };
