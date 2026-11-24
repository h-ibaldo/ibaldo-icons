import type { DefineComponent } from 'vue';

export interface PaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Paperclip: DefineComponent<PaperclipProps>;

export default Paperclip;
export { Paperclip };
