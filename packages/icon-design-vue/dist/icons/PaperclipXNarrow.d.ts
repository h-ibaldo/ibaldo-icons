import type { DefineComponent } from 'vue';

export interface PaperclipXNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXNarrow: DefineComponent<PaperclipXNarrowProps>;

export default PaperclipXNarrow;
export { PaperclipXNarrow };
