import type { DefineComponent } from 'vue';

export interface PaperclipShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipShort: DefineComponent<PaperclipShortProps>;

export default PaperclipShort;
export { PaperclipShort };
