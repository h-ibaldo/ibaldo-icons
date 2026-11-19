import type { DefineComponent } from 'vue';

export interface FileMinusCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusCornerPlain: DefineComponent<FileMinusCornerPlainProps>;

export default FileMinusCornerPlain;
export { FileMinusCornerPlain };
