import type { DefineComponent } from 'vue';

export interface PaperclipSquareLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareLong: DefineComponent<PaperclipSquareLongProps>;

export default PaperclipSquareLong;
export { PaperclipSquareLong };
