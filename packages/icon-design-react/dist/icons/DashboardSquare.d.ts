import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardSquare: ForwardRefExoticComponent<DashboardSquareProps & RefAttributes<SVGSVGElement>>;

export default DashboardSquare;
export { DashboardSquare };
