import type { DefineComponent } from 'vue';

export interface FileWarningCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWarningCut: DefineComponent<FileWarningCutProps>;

export default FileWarningCut;
export { FileWarningCut };
