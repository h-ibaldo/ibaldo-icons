import type { DefineComponent } from 'vue';

export interface FileArrowInPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArrowInPlain: DefineComponent<FileArrowInPlainProps>;

export default FileArrowInPlain;
export { FileArrowInPlain };
