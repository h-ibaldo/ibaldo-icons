import type { DefineComponent } from 'vue';

export interface PaperclipSquareShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareShort: DefineComponent<PaperclipSquareShortProps>;

export default PaperclipSquareShort;
export { PaperclipSquareShort };
