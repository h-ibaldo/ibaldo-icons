import type { DefineComponent } from 'vue';

export interface TableColumnsSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TableColumnsSettings: DefineComponent<TableColumnsSettingsProps>;

export default TableColumnsSettings;
export { TableColumnsSettings };
