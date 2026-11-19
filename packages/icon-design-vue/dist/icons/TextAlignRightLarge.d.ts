import type { DefineComponent } from 'vue';

export interface TextAlignRightLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignRightLarge: DefineComponent<TextAlignRightLargeProps>;

export default TextAlignRightLarge;
export { TextAlignRightLarge };
