import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Monitor: ForwardRefExoticComponent<MonitorProps & RefAttributes<SVGSVGElement>>;

export default Monitor;
export { Monitor };
