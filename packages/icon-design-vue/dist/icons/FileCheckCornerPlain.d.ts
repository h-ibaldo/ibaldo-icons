import type { DefineComponent } from 'vue';

export interface FileCheckCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCornerPlain: DefineComponent<FileCheckCornerPlainProps>;

export default FileCheckCornerPlain;
export { FileCheckCornerPlain };
