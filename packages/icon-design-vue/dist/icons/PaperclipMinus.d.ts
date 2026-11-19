import type { DefineComponent } from 'vue';

export interface PaperclipMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinus: DefineComponent<PaperclipMinusProps>;

export default PaperclipMinus;
export { PaperclipMinus };
