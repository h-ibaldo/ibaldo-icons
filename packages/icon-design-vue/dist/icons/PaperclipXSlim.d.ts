import type { DefineComponent } from 'vue';

export interface PaperclipXSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXSlim: DefineComponent<PaperclipXSlimProps>;

export default PaperclipXSlim;
export { PaperclipXSlim };
