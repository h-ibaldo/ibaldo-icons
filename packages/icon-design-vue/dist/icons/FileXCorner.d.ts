import type { DefineComponent } from 'vue';

export interface FileXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCorner: DefineComponent<FileXCornerProps>;

export default FileXCorner;
export { FileXCorner };
