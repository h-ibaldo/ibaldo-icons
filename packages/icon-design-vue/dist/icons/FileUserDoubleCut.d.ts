import type { DefineComponent } from 'vue';

export interface FileUserDoubleCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUserDoubleCut: DefineComponent<FileUserDoubleCutProps>;

export default FileUserDoubleCut;
export { FileUserDoubleCut };
