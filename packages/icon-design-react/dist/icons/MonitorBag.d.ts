import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorBagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorBag: ForwardRefExoticComponent<MonitorBagProps & RefAttributes<SVGSVGElement>>;

export default MonitorBag;
export { MonitorBag };
