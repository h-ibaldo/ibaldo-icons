import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardSharp: ForwardRefExoticComponent<DashboardSharpProps & RefAttributes<SVGSVGElement>>;

export default DashboardSharp;
export { DashboardSharp };
