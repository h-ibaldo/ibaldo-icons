import type { DefineComponent } from 'vue';

export interface PaperclipSquareOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpen: DefineComponent<PaperclipSquareOpenProps>;

export default PaperclipSquareOpen;
export { PaperclipSquareOpen };
