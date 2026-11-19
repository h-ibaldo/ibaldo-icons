import type { DefineComponent } from 'vue';

export interface FileStackPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackPlain: DefineComponent<FileStackPlainProps>;

export default FileStackPlain;
export { FileStackPlain };
