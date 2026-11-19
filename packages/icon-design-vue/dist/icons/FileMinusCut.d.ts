import type { DefineComponent } from 'vue';

export interface FileMinusCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusCut: DefineComponent<FileMinusCutProps>;

export default FileMinusCut;
export { FileMinusCut };
