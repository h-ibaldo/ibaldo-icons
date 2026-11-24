import type { DefineComponent } from 'vue';

export interface FileStarCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStarCut: DefineComponent<FileStarCutProps>;

export default FileStarCut;
export { FileStarCut };
