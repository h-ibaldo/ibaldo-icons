import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardGaugeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardGauge: ForwardRefExoticComponent<DashboardGaugeProps & RefAttributes<SVGSVGElement>>;

export default DashboardGauge;
export { DashboardGauge };
