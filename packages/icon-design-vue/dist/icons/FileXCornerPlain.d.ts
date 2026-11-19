import type { DefineComponent } from 'vue';

export interface FileXCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCornerPlain: DefineComponent<FileXCornerPlainProps>;

export default FileXCornerPlain;
export { FileXCornerPlain };
