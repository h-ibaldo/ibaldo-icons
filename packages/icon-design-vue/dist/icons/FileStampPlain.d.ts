import type { DefineComponent } from 'vue';

export interface FileStampPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStampPlain: DefineComponent<FileStampPlainProps>;

export default FileStampPlain;
export { FileStampPlain };
