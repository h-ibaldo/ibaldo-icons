import type { DefineComponent } from 'vue';

export interface FileArrowInCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArrowInCut: DefineComponent<FileArrowInCutProps>;

export default FileArrowInCut;
export { FileArrowInCut };
