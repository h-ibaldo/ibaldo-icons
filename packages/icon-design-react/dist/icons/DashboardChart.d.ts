import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardChart: ForwardRefExoticComponent<DashboardChartProps & RefAttributes<SVGSVGElement>>;

export default DashboardChart;
export { DashboardChart };
