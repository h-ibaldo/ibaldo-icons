import type { DefineComponent } from 'vue';

export interface FileMinusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusPlain: DefineComponent<FileMinusPlainProps>;

export default FileMinusPlain;
export { FileMinusPlain };
