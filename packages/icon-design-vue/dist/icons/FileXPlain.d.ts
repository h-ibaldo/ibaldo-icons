import type { DefineComponent } from 'vue';

export interface FileXPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXPlain: DefineComponent<FileXPlainProps>;

export default FileXPlain;
export { FileXPlain };
