import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorCloudProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorCloud: ForwardRefExoticComponent<MonitorCloudProps & RefAttributes<SVGSVGElement>>;

export default MonitorCloud;
export { MonitorCloud };
