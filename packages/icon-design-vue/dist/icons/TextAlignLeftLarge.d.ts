import type { DefineComponent } from 'vue';

export interface TextAlignLeftLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignLeftLarge: DefineComponent<TextAlignLeftLargeProps>;

export default TextAlignLeftLarge;
export { TextAlignLeftLarge };
