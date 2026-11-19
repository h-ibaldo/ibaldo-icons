import type { DefineComponent } from 'vue';

export interface PaperclipXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXWide: DefineComponent<PaperclipXWideProps>;

export default PaperclipXWide;
export { PaperclipXWide };
