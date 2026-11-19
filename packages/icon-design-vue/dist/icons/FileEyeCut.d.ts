import type { DefineComponent } from 'vue';

export interface FileEyeCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEyeCut: DefineComponent<FileEyeCutProps>;

export default FileEyeCut;
export { FileEyeCut };
