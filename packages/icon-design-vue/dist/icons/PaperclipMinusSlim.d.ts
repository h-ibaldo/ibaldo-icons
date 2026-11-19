import type { DefineComponent } from 'vue';

export interface PaperclipMinusSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusSlim: DefineComponent<PaperclipMinusSlimProps>;

export default PaperclipMinusSlim;
export { PaperclipMinusSlim };
