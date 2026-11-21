import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorOff: ForwardRefExoticComponent<MonitorOffProps & RefAttributes<SVGSVGElement>>;

export default MonitorOff;
export { MonitorOff };
