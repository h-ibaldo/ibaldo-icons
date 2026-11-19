import type { DefineComponent } from 'vue';

export interface PaperclipVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipVertical: DefineComponent<PaperclipVerticalProps>;

export default PaperclipVertical;
export { PaperclipVertical };
