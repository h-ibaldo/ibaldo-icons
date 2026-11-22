import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TableColumnsSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TableColumnsSettings: ForwardRefExoticComponent<TableColumnsSettingsProps & RefAttributes<SVGSVGElement>>;

export default TableColumnsSettings;
export { TableColumnsSettings };
