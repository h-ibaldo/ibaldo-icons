import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorArrowRight: ForwardRefExoticComponent<MonitorArrowRightProps & RefAttributes<SVGSVGElement>>;

export default MonitorArrowRight;
export { MonitorArrowRight };
