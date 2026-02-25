import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableAndGraph2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableAndGraph2: ForwardRefExoticComponent<TableAndGraph2Props & RefAttributes<SVGSVGElement>>;

export default TableAndGraph2;
export { TableAndGraph2 };
