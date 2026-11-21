import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorPlayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorPlay: ForwardRefExoticComponent<MonitorPlayProps & RefAttributes<SVGSVGElement>>;

export default MonitorPlay;
export { MonitorPlay };
