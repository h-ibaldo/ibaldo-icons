import type { DefineComponent } from 'vue';

export interface PaperclipCheckFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckFlipped: DefineComponent<PaperclipCheckFlippedProps>;

export default PaperclipCheckFlipped;
export { PaperclipCheckFlipped };
