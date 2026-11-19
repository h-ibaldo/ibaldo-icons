import type { DefineComponent } from 'vue';

export interface PaperclipCheckNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckNarrow: DefineComponent<PaperclipCheckNarrowProps>;

export default PaperclipCheckNarrow;
export { PaperclipCheckNarrow };
