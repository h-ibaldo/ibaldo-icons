import type { DefineComponent } from 'vue';

export interface FileFilterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileFilterPlain: DefineComponent<FileFilterPlainProps>;

export default FileFilterPlain;
export { FileFilterPlain };
