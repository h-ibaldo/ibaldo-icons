import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardPieBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardPieBars: ForwardRefExoticComponent<DashboardPieBarsProps & RefAttributes<SVGSVGElement>>;

export default DashboardPieBars;
export { DashboardPieBars };
