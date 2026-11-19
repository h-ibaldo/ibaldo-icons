import type { DefineComponent } from 'vue';

export interface FileImageCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageCorner: DefineComponent<FileImageCornerProps>;

export default FileImageCorner;
export { FileImageCorner };
