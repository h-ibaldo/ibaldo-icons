import type { DefineComponent } from 'vue';

export interface FileChartBarCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartBarCut: DefineComponent<FileChartBarCutProps>;

export default FileChartBarCut;
export { FileChartBarCut };
