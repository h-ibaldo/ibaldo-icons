import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TableClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TableClock: ForwardRefExoticComponent<TableClockProps & RefAttributes<Svg>>;

export default TableClock;
export { TableClock };
