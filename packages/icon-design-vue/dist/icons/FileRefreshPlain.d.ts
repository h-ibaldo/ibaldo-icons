import type { DefineComponent } from 'vue';

export interface FileRefreshPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileRefreshPlain: DefineComponent<FileRefreshPlainProps>;

export default FileRefreshPlain;
export { FileRefreshPlain };
