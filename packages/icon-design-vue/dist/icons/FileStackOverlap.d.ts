import type { DefineComponent } from 'vue';

export interface FileStackOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackOverlap: DefineComponent<FileStackOverlapProps>;

export default FileStackOverlap;
export { FileStackOverlap };
