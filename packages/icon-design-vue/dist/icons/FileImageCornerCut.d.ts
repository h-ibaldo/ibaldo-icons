import type { DefineComponent } from 'vue';

export interface FileImageCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageCornerCut: DefineComponent<FileImageCornerCutProps>;

export default FileImageCornerCut;
export { FileImageCornerCut };
