import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorPulseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorPulse: ForwardRefExoticComponent<MonitorPulseProps & RefAttributes<SVGSVGElement>>;

export default MonitorPulse;
export { MonitorPulse };
