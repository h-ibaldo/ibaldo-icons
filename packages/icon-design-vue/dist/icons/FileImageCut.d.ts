import type { DefineComponent } from 'vue';

export interface FileImageCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageCut: DefineComponent<FileImageCutProps>;

export default FileImageCut;
export { FileImageCut };
