import type { DefineComponent } from 'vue';

export interface FileImageCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageCornerPlain: DefineComponent<FileImageCornerPlainProps>;

export default FileImageCornerPlain;
export { FileImageCornerPlain };
