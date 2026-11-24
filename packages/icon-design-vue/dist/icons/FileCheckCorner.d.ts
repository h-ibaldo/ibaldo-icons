import type { DefineComponent } from 'vue';

export interface FileCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCorner: DefineComponent<FileCheckCornerProps>;

export default FileCheckCorner;
export { FileCheckCorner };
