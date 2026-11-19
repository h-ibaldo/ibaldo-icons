import type { DefineComponent } from 'vue';

export interface FilePaperclipHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePaperclipHorizontal: DefineComponent<FilePaperclipHorizontalProps>;

export default FilePaperclipHorizontal;
export { FilePaperclipHorizontal };
