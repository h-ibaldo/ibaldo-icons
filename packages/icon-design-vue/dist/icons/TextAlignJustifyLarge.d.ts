import type { DefineComponent } from 'vue';

export interface TextAlignJustifyLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignJustifyLarge: DefineComponent<TextAlignJustifyLargeProps>;

export default TextAlignJustifyLarge;
export { TextAlignJustifyLarge };
