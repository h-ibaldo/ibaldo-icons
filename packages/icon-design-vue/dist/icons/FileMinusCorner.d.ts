import type { DefineComponent } from 'vue';

export interface FileMinusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusCorner: DefineComponent<FileMinusCornerProps>;

export default FileMinusCorner;
export { FileMinusCorner };
