import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorMobileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorMobile: ForwardRefExoticComponent<MonitorMobileProps & RefAttributes<SVGSVGElement>>;

export default MonitorMobile;
export { MonitorMobile };
