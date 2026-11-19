import type { DefineComponent } from 'vue';

export interface FileEditCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditCut: DefineComponent<FileEditCutProps>;

export default FileEditCut;
export { FileEditCut };
