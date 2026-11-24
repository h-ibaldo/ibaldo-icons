import type { DefineComponent } from 'vue';

export interface TextCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextCursor: DefineComponent<TextCursorProps>;

export default TextCursor;
export { TextCursor };
