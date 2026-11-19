import type { DefineComponent } from 'vue';

export interface FileStampCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStampCut: DefineComponent<FileStampCutProps>;

export default FileStampCut;
export { FileStampCut };
