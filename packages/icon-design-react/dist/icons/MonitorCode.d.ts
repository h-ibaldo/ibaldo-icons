import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorCode: ForwardRefExoticComponent<MonitorCodeProps & RefAttributes<SVGSVGElement>>;

export default MonitorCode;
export { MonitorCode };
