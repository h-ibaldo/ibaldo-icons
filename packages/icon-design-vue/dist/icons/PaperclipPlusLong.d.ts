import type { DefineComponent } from 'vue';

export interface PaperclipPlusLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusLong: DefineComponent<PaperclipPlusLongProps>;

export default PaperclipPlusLong;
export { PaperclipPlusLong };
