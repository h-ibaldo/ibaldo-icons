import type { DefineComponent } from 'vue';

export interface FileChartAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartAxis: DefineComponent<FileChartAxisProps>;

export default FileChartAxis;
export { FileChartAxis };
