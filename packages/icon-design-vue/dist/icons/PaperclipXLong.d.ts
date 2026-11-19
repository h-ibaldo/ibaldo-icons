import type { DefineComponent } from 'vue';

export interface PaperclipXLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXLong: DefineComponent<PaperclipXLongProps>;

export default PaperclipXLong;
export { PaperclipXLong };
