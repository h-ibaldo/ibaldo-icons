import type { DefineComponent } from 'vue';

export interface FileCheckPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckPlain: DefineComponent<FileCheckPlainProps>;

export default FileCheckPlain;
export { FileCheckPlain };
