import type { DefineComponent } from 'vue';

export interface PaperclipMinusNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusNarrow: DefineComponent<PaperclipMinusNarrowProps>;

export default PaperclipMinusNarrow;
export { PaperclipMinusNarrow };
