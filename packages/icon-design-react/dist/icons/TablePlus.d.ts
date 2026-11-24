import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TablePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TablePlus: ForwardRefExoticComponent<TablePlusProps & RefAttributes<SVGSVGElement>>;

export default TablePlus;
export { TablePlus };
