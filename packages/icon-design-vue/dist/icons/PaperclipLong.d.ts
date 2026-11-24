import type { DefineComponent } from 'vue';

export interface PaperclipLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipLong: DefineComponent<PaperclipLongProps>;

export default PaperclipLong;
export { PaperclipLong };
