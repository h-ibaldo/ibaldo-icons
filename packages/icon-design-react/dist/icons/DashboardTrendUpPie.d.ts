import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardTrendUpPieProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardTrendUpPie: ForwardRefExoticComponent<DashboardTrendUpPieProps & RefAttributes<SVGSVGElement>>;

export default DashboardTrendUpPie;
export { DashboardTrendUpPie };
