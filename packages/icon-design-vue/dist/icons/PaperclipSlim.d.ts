import type { DefineComponent } from 'vue';

export interface PaperclipSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipSlim: DefineComponent<PaperclipSlimProps>;

export default PaperclipSlim;
export { PaperclipSlim };
