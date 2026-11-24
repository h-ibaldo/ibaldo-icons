import type { DefineComponent } from 'vue';

export interface FileStackCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackCode: DefineComponent<FileStackCodeProps>;

export default FileStackCode;
export { FileStackCode };
