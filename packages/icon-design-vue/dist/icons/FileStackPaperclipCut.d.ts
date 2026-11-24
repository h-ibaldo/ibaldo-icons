import type { DefineComponent } from 'vue';

export interface FileStackPaperclipCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackPaperclipCut: DefineComponent<FileStackPaperclipCutProps>;

export default FileStackPaperclipCut;
export { FileStackPaperclipCut };
