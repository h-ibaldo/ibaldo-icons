import type { DefineComponent } from 'vue';

export interface FileEditCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditCorner: DefineComponent<FileEditCornerProps>;

export default FileEditCorner;
export { FileEditCorner };
