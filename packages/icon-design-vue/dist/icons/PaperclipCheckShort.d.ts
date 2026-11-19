import type { DefineComponent } from 'vue';

export interface PaperclipCheckShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckShort: DefineComponent<PaperclipCheckShortProps>;

export default PaperclipCheckShort;
export { PaperclipCheckShort };
