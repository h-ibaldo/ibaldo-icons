import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorArrowDown: ForwardRefExoticComponent<MonitorArrowDownProps & RefAttributes<SVGSVGElement>>;

export default MonitorArrowDown;
export { MonitorArrowDown };
