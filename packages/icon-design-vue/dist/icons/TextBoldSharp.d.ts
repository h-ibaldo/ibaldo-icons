import type { DefineComponent } from 'vue';

export interface TextBoldSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextBoldSharp: DefineComponent<TextBoldSharpProps>;

export default TextBoldSharp;
export { TextBoldSharp };
