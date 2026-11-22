import type { DefineComponent } from 'vue';

export interface FileTableCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTableCut: DefineComponent<FileTableCutProps>;

export default FileTableCut;
export { FileTableCut };
