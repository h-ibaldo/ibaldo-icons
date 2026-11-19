import type { DefineComponent } from 'vue';

export interface FileUserPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUserPlain: DefineComponent<FileUserPlainProps>;

export default FileUserPlain;
export { FileUserPlain };
