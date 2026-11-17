import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableChartLineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableChartLine: ForwardRefExoticComponent<TableChartLineProps & RefAttributes<SVGSVGElement>>;

export default TableChartLine;
export { TableChartLine };
