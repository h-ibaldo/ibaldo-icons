import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorX: ForwardRefExoticComponent<MonitorXProps & RefAttributes<SVGSVGElement>>;

export default MonitorX;
export { MonitorX };
