import type { DefineComponent } from 'vue';

export interface PaperclipWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipWide: DefineComponent<PaperclipWideProps>;

export default PaperclipWide;
export { PaperclipWide };
