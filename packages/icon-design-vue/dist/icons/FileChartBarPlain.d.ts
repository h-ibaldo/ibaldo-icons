import type { DefineComponent } from 'vue';

export interface FileChartBarPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileChartBarPlain: DefineComponent<FileChartBarPlainProps>;

export default FileChartBarPlain;
export { FileChartBarPlain };
