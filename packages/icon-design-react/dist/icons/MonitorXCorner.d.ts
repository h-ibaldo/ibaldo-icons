import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorXCorner: ForwardRefExoticComponent<MonitorXCornerProps & RefAttributes<SVGSVGElement>>;

export default MonitorXCorner;
export { MonitorXCorner };
