import type { DefineComponent } from 'vue';

export interface FileGridCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileGridCut: DefineComponent<FileGridCutProps>;

export default FileGridCut;
export { FileGridCut };
