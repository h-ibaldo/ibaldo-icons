import type { DefineComponent } from 'vue';

export interface PaperclipSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSquare: DefineComponent<PaperclipSquareProps>;

export default PaperclipSquare;
export { PaperclipSquare };
