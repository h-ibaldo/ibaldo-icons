import type { DefineComponent } from 'vue';

export interface FileArrowInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArrowIn: DefineComponent<FileArrowInProps>;

export default FileArrowIn;
export { FileArrowIn };
