import type { DefineComponent } from 'vue';

export interface PaperclipPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlus: DefineComponent<PaperclipPlusProps>;

export default PaperclipPlus;
export { PaperclipPlus };
