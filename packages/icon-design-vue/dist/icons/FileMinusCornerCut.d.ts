import type { DefineComponent } from 'vue';

export interface FileMinusCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusCornerCut: DefineComponent<FileMinusCornerCutProps>;

export default FileMinusCornerCut;
export { FileMinusCornerCut };
