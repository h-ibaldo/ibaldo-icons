import type { DefineComponent } from 'vue';

export interface FileLettersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLetters: DefineComponent<FileLettersProps>;

export default FileLetters;
export { FileLetters };
