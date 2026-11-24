import type { DefineComponent } from 'vue';

export interface PaperclipPlusSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusSlim: DefineComponent<PaperclipPlusSlimProps>;

export default PaperclipPlusSlim;
export { PaperclipPlusSlim };
