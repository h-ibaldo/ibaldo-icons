import type { DefineComponent } from 'vue';

export interface FileXCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCut: DefineComponent<FileXCutProps>;

export default FileXCut;
export { FileXCut };
