import type { DefineComponent } from 'vue';

export interface FileChartBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartBar: DefineComponent<FileChartBarProps>;

export default FileChartBar;
export { FileChartBar };
