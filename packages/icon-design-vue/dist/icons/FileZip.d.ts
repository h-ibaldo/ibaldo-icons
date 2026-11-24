import type { DefineComponent } from 'vue';

export interface FileZipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileZip: DefineComponent<FileZipProps>;

export default FileZip;
export { FileZip };
