import type { DefineComponent } from 'vue';

export interface PaperclipCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheck: DefineComponent<PaperclipCheckProps>;

export default PaperclipCheck;
export { PaperclipCheck };
