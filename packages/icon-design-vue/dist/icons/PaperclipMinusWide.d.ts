import type { DefineComponent } from 'vue';

export interface PaperclipMinusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusWide: DefineComponent<PaperclipMinusWideProps>;

export default PaperclipMinusWide;
export { PaperclipMinusWide };
