import type { DefineComponent } from 'vue';

export interface FileTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTriangle: DefineComponent<FileTriangleProps>;

export default FileTriangle;
export { FileTriangle };
