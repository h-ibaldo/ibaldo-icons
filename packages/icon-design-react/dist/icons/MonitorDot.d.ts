import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorDot: ForwardRefExoticComponent<MonitorDotProps & RefAttributes<SVGSVGElement>>;

export default MonitorDot;
export { MonitorDot };
