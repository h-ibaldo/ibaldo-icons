import type { DefineComponent } from 'vue';

export interface PaperclipPlusNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusNarrow: DefineComponent<PaperclipPlusNarrowProps>;

export default PaperclipPlusNarrow;
export { PaperclipPlusNarrow };
