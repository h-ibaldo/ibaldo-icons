import type { DefineComponent } from 'vue';

export interface FileWarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWarning: DefineComponent<FileWarningProps>;

export default FileWarning;
export { FileWarning };
