import type { DefineComponent } from 'vue';

export interface PaperclipSquareThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareThin: DefineComponent<PaperclipSquareThinProps>;

export default PaperclipSquareThin;
export { PaperclipSquareThin };
