import type { DefineComponent } from 'vue';

export interface FileEditLeftCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditLeftCut: DefineComponent<FileEditLeftCutProps>;

export default FileEditLeftCut;
export { FileEditLeftCut };
