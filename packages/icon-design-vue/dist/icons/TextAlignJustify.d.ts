import type { DefineComponent } from 'vue';

export interface TextAlignJustifyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignJustify: DefineComponent<TextAlignJustifyProps>;

export default TextAlignJustify;
export { TextAlignJustify };
