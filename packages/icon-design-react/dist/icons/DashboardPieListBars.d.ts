import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardPieListBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardPieListBars: ForwardRefExoticComponent<DashboardPieListBarsProps & RefAttributes<SVGSVGElement>>;

export default DashboardPieListBars;
export { DashboardPieListBars };
