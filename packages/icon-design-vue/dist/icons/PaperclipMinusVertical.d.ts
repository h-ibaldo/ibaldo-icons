import type { DefineComponent } from 'vue';

export interface PaperclipMinusVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusVertical: DefineComponent<PaperclipMinusVerticalProps>;

export default PaperclipMinusVertical;
export { PaperclipMinusVertical };
