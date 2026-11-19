import type { DefineComponent } from 'vue';

export interface PaperclipCheckSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckSlim: DefineComponent<PaperclipCheckSlimProps>;

export default PaperclipCheckSlim;
export { PaperclipCheckSlim };
