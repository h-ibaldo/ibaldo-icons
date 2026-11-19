import type { DefineComponent } from 'vue';

export interface FileStampProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStamp: DefineComponent<FileStampProps>;

export default FileStamp;
export { FileStamp };
