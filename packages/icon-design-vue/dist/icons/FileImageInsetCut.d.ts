import type { DefineComponent } from 'vue';

export interface FileImageInsetCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageInsetCut: DefineComponent<FileImageInsetCutProps>;

export default FileImageInsetCut;
export { FileImageInsetCut };
