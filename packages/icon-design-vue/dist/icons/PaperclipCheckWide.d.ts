import type { DefineComponent } from 'vue';

export interface PaperclipCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckWide: DefineComponent<PaperclipCheckWideProps>;

export default PaperclipCheckWide;
export { PaperclipCheckWide };
