import type { DefineComponent } from 'vue';

export interface PaperclipSquareOpenThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpenThin: DefineComponent<PaperclipSquareOpenThinProps>;

export default PaperclipSquareOpenThin;
export { PaperclipSquareOpenThin };
