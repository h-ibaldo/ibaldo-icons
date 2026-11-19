import type { DefineComponent } from 'vue';

export interface FileXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileX: DefineComponent<FileXProps>;

export default FileX;
export { FileX };
