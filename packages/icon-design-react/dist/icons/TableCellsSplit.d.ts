import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableCellsSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableCellsSplit: ForwardRefExoticComponent<TableCellsSplitProps & RefAttributes<SVGSVGElement>>;

export default TableCellsSplit;
export { TableCellsSplit };
