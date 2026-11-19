import type { DefineComponent } from 'vue';

export interface FileWarningPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWarningPlain: DefineComponent<FileWarningPlainProps>;

export default FileWarningPlain;
export { FileWarningPlain };
