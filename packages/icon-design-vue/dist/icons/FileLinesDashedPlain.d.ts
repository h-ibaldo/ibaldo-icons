import type { DefineComponent } from 'vue';

export interface FileLinesDashedPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesDashedPlain: DefineComponent<FileLinesDashedPlainProps>;

export default FileLinesDashedPlain;
export { FileLinesDashedPlain };
