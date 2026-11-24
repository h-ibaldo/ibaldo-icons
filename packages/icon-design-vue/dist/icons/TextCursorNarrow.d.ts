import type { DefineComponent } from 'vue';

export interface TextCursorNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextCursorNarrow: DefineComponent<TextCursorNarrowProps>;

export default TextCursorNarrow;
export { TextCursorNarrow };
