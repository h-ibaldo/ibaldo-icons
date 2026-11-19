import type { DefineComponent } from 'vue';

export interface FileEditPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditPlain: DefineComponent<FileEditPlainProps>;

export default FileEditPlain;
export { FileEditPlain };
