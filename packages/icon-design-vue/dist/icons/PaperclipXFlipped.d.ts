import type { DefineComponent } from 'vue';

export interface PaperclipXFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXFlipped: DefineComponent<PaperclipXFlippedProps>;

export default PaperclipXFlipped;
export { PaperclipXFlipped };
