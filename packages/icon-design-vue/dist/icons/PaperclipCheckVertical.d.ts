import type { DefineComponent } from 'vue';

export interface PaperclipCheckVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckVertical: DefineComponent<PaperclipCheckVerticalProps>;

export default PaperclipCheckVertical;
export { PaperclipCheckVertical };
