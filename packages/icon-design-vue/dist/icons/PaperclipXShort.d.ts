import type { DefineComponent } from 'vue';

export interface PaperclipXShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXShort: DefineComponent<PaperclipXShortProps>;

export default PaperclipXShort;
export { PaperclipXShort };
