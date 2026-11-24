import type { DefineComponent } from 'vue';

export interface FileFilterCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileFilterCut: DefineComponent<FileFilterCutProps>;

export default FileFilterCut;
export { FileFilterCut };
