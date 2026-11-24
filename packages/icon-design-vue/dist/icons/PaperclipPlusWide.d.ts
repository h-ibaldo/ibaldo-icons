import type { DefineComponent } from 'vue';

export interface PaperclipPlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusWide: DefineComponent<PaperclipPlusWideProps>;

export default PaperclipPlusWide;
export { PaperclipPlusWide };
