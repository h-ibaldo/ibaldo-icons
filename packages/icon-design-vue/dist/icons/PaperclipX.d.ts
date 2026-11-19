import type { DefineComponent } from 'vue';

export interface PaperclipXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipX: DefineComponent<PaperclipXProps>;

export default PaperclipX;
export { PaperclipX };
