import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorPulseStandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorPulseStand: ForwardRefExoticComponent<MonitorPulseStandProps & RefAttributes<SVGSVGElement>>;

export default MonitorPulseStand;
export { MonitorPulseStand };
