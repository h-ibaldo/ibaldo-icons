import type { DefineComponent } from 'vue';

export interface PaperclipXVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXVertical: DefineComponent<PaperclipXVerticalProps>;

export default PaperclipXVertical;
export { PaperclipXVertical };
