import type { DefineComponent } from 'vue';

export interface PaperclipPlusFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusFlipped: DefineComponent<PaperclipPlusFlippedProps>;

export default PaperclipPlusFlipped;
export { PaperclipPlusFlipped };
