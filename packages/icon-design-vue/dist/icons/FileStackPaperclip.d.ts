import type { DefineComponent } from 'vue';

export interface FileStackPaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackPaperclip: DefineComponent<FileStackPaperclipProps>;

export default FileStackPaperclip;
export { FileStackPaperclip };
