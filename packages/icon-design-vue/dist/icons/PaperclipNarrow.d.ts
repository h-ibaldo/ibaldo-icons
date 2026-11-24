import type { DefineComponent } from 'vue';

export interface PaperclipNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipNarrow: DefineComponent<PaperclipNarrowProps>;

export default PaperclipNarrow;
export { PaperclipNarrow };
