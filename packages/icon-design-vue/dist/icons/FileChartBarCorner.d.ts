import type { DefineComponent } from 'vue';

export interface FileChartBarCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartBarCorner: DefineComponent<FileChartBarCornerProps>;

export default FileChartBarCorner;
export { FileChartBarCorner };
