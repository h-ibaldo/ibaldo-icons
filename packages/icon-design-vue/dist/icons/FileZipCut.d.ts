import type { DefineComponent } from 'vue';

export interface FileZipCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileZipCut: DefineComponent<FileZipCutProps>;

export default FileZipCut;
export { FileZipCut };
