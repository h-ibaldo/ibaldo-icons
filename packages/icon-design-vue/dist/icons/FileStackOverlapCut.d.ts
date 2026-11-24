import type { DefineComponent } from 'vue';

export interface FileStackOverlapCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackOverlapCut: DefineComponent<FileStackOverlapCutProps>;

export default FileStackOverlapCut;
export { FileStackOverlapCut };
