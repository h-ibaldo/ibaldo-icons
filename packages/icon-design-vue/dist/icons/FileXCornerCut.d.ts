import type { DefineComponent } from 'vue';

export interface FileXCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCornerCut: DefineComponent<FileXCornerCutProps>;

export default FileXCornerCut;
export { FileXCornerCut };
