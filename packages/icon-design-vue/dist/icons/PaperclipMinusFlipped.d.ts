import type { DefineComponent } from 'vue';

export interface PaperclipMinusFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusFlipped: DefineComponent<PaperclipMinusFlippedProps>;

export default PaperclipMinusFlipped;
export { PaperclipMinusFlipped };
