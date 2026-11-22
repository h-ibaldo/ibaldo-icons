import type { DefineComponent } from 'vue';

export interface FileChartAxisCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartAxisCut: DefineComponent<FileChartAxisCutProps>;

export default FileChartAxisCut;
export { FileChartAxisCut };
