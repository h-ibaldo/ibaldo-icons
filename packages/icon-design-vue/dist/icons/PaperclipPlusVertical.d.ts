import type { DefineComponent } from 'vue';

export interface PaperclipPlusVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusVertical: DefineComponent<PaperclipPlusVerticalProps>;

export default PaperclipPlusVertical;
export { PaperclipPlusVertical };
