import type { DefineComponent } from 'vue';

export interface SquareStackPaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPaperclip: DefineComponent<SquareStackPaperclipProps>;

export default SquareStackPaperclip;
export { SquareStackPaperclip };
