import type { DefineComponent } from 'vue';

export interface FileCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCode: DefineComponent<FileCodeProps>;

export default FileCode;
export { FileCode };
