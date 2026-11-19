import type { DefineComponent } from 'vue';

export interface FileStackPaperclipPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackPaperclipPlain: DefineComponent<FileStackPaperclipPlainProps>;

export default FileStackPaperclipPlain;
export { FileStackPaperclipPlain };
