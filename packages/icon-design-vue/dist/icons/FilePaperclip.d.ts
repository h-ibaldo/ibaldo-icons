import type { DefineComponent } from 'vue';

export interface FilePaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePaperclip: DefineComponent<FilePaperclipProps>;

export default FilePaperclip;
export { FilePaperclip };
