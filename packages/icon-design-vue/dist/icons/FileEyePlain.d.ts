import type { DefineComponent } from 'vue';

export interface FileEyePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEyePlain: DefineComponent<FileEyePlainProps>;

export default FileEyePlain;
export { FileEyePlain };
