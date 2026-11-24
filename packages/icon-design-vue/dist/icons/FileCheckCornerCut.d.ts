import type { DefineComponent } from 'vue';

export interface FileCheckCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCornerCut: DefineComponent<FileCheckCornerCutProps>;

export default FileCheckCornerCut;
export { FileCheckCornerCut };
