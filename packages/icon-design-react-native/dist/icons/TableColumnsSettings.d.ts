import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TableColumnsSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TableColumnsSettings: ForwardRefExoticComponent<TableColumnsSettingsProps & RefAttributes<Svg>>;

export default TableColumnsSettings;
export { TableColumnsSettings };
