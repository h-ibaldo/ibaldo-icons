import type { DefineComponent } from 'vue';

export interface FileSearchPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSearchPlain: DefineComponent<FileSearchPlainProps>;

export default FileSearchPlain;
export { FileSearchPlain };
