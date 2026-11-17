import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardPieTrendUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardPieTrendUp: ForwardRefExoticComponent<DashboardPieTrendUpProps & RefAttributes<SVGSVGElement>>;

export default DashboardPieTrendUp;
export { DashboardPieTrendUp };
