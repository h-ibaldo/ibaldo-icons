import type { DefineComponent } from 'vue';

export interface FileArticleCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArticleCut: DefineComponent<FileArticleCutProps>;

export default FileArticleCut;
export { FileArticleCut };
