import type { DefineComponent } from 'vue';

export interface FileCheckCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCut: DefineComponent<FileCheckCutProps>;

export default FileCheckCut;
export { FileCheckCut };
