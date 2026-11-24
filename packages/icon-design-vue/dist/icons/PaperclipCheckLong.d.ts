import type { DefineComponent } from 'vue';

export interface PaperclipCheckLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckLong: DefineComponent<PaperclipCheckLongProps>;

export default PaperclipCheckLong;
export { PaperclipCheckLong };
