import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableCellsMergeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableCellsMerge: ForwardRefExoticComponent<TableCellsMergeProps & RefAttributes<SVGSVGElement>>;

export default TableCellsMerge;
export { TableCellsMerge };
