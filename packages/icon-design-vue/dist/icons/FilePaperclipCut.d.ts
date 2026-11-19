import type { DefineComponent } from 'vue';

export interface FilePaperclipCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePaperclipCut: DefineComponent<FilePaperclipCutProps>;

export default FilePaperclipCut;
export { FilePaperclipCut };
