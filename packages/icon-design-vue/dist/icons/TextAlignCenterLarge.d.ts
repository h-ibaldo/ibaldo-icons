import type { DefineComponent } from 'vue';

export interface TextAlignCenterLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignCenterLarge: DefineComponent<TextAlignCenterLargeProps>;

export default TextAlignCenterLarge;
export { TextAlignCenterLarge };
