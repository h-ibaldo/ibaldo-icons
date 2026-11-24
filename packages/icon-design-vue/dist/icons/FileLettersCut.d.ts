import type { DefineComponent } from 'vue';

export interface FileLettersCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLettersCut: DefineComponent<FileLettersCutProps>;

export default FileLettersCut;
export { FileLettersCut };
