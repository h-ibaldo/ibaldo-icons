import type { DefineComponent } from 'vue';

export interface FileRefreshCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileRefreshCut: DefineComponent<FileRefreshCutProps>;

export default FileRefreshCut;
export { FileRefreshCut };
