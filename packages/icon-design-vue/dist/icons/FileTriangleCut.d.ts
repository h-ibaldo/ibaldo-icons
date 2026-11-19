import type { DefineComponent } from 'vue';

export interface FileTriangleCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTriangleCut: DefineComponent<FileTriangleCutProps>;

export default FileTriangleCut;
export { FileTriangleCut };
