import type { DefineComponent } from 'vue';

export interface FileEditDetailedCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditDetailedCut: DefineComponent<FileEditDetailedCutProps>;

export default FileEditDetailedCut;
export { FileEditDetailedCut };
