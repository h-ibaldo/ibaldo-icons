import type { DefineComponent } from 'vue';

export interface FilePaperclipPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePaperclipPlain: DefineComponent<FilePaperclipPlainProps>;

export default FilePaperclipPlain;
export { FilePaperclipPlain };
