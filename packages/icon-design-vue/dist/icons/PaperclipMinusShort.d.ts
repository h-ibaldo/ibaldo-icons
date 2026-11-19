import type { DefineComponent } from 'vue';

export interface PaperclipMinusShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusShort: DefineComponent<PaperclipMinusShortProps>;

export default PaperclipMinusShort;
export { PaperclipMinusShort };
