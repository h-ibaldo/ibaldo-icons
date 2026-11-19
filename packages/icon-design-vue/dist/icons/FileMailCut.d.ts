import type { DefineComponent } from 'vue';

export interface FileMailCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMailCut: DefineComponent<FileMailCutProps>;

export default FileMailCut;
export { FileMailCut };
