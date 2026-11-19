import type { DefineComponent } from 'vue';

export interface FileCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheck: DefineComponent<FileCheckProps>;

export default FileCheck;
export { FileCheck };
