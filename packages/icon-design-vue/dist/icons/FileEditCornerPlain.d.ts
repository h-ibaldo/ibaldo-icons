import type { DefineComponent } from 'vue';

export interface FileEditCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditCornerPlain: DefineComponent<FileEditCornerPlainProps>;

export default FileEditCornerPlain;
export { FileEditCornerPlain };
