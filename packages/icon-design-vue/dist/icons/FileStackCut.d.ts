import type { DefineComponent } from 'vue';

export interface FileStackCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackCut: DefineComponent<FileStackCutProps>;

export default FileStackCut;
export { FileStackCut };
