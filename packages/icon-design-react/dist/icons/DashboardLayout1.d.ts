import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardLayout1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardLayout1: ForwardRefExoticComponent<DashboardLayout1Props & RefAttributes<SVGSVGElement>>;

export default DashboardLayout1;
export { DashboardLayout1 };
