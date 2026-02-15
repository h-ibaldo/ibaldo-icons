import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardLayout2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardLayout2: ForwardRefExoticComponent<DashboardLayout2Props & RefAttributes<SVGSVGElement>>;

export default DashboardLayout2;
export { DashboardLayout2 };
