import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorStopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorStop: ForwardRefExoticComponent<MonitorStopProps & RefAttributes<SVGSVGElement>>;

export default MonitorStop;
export { MonitorStop };
