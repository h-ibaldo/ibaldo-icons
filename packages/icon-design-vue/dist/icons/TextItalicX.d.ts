import type { DefineComponent } from 'vue';

export interface TextItalicXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextItalicX: DefineComponent<TextItalicXProps>;

export default TextItalicX;
export { TextItalicX };
