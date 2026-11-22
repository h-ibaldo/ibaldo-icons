import type { DefineComponent } from 'vue';

export interface FileKeyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileKey: DefineComponent<FileKeyProps>;

export default FileKey;
export { FileKey };
