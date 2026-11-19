import type { DefineComponent } from 'vue';

export interface FileMailPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMailPlain: DefineComponent<FileMailPlainProps>;

export default FileMailPlain;
export { FileMailPlain };
