import type { DefineComponent } from 'vue';

export interface PaperclipMinusLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusLong: DefineComponent<PaperclipMinusLongProps>;

export default PaperclipMinusLong;
export { PaperclipMinusLong };
