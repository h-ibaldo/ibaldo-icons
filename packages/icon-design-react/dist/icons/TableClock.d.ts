import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableClock: ForwardRefExoticComponent<TableClockProps & RefAttributes<SVGSVGElement>>;

export default TableClock;
export { TableClock };
