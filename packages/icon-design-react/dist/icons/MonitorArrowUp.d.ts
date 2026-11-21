import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorArrowUp: ForwardRefExoticComponent<MonitorArrowUpProps & RefAttributes<SVGSVGElement>>;

export default MonitorArrowUp;
export { MonitorArrowUp };
