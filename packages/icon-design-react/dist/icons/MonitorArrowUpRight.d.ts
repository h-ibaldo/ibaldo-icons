import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorArrowUpRight: ForwardRefExoticComponent<MonitorArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default MonitorArrowUpRight;
export { MonitorArrowUpRight };
