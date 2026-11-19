import type { DefineComponent } from 'vue';

export interface PaperclipFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipFlipped: DefineComponent<PaperclipFlippedProps>;

export default PaperclipFlipped;
export { PaperclipFlipped };
