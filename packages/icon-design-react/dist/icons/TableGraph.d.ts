import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableGraphProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableGraph: ForwardRefExoticComponent<TableGraphProps & RefAttributes<SVGSVGElement>>;

export default TableGraph;
export { TableGraph };
