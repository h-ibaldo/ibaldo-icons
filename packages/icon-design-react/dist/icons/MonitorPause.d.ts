import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorPauseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorPause: ForwardRefExoticComponent<MonitorPauseProps & RefAttributes<SVGSVGElement>>;

export default MonitorPause;
export { MonitorPause };
