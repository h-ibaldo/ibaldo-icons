import type { DefineComponent } from 'vue';

export interface FileChartBarCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartBarCornerCut: DefineComponent<FileChartBarCornerCutProps>;

export default FileChartBarCornerCut;
export { FileChartBarCornerCut };
