import type { DefineComponent } from 'vue';

export interface PaperclipPlusShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusShort: DefineComponent<PaperclipPlusShortProps>;

export default PaperclipPlusShort;
export { PaperclipPlusShort };
