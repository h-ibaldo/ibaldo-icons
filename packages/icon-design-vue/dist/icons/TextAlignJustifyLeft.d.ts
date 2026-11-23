import type { DefineComponent } from 'vue';

export interface TextAlignJustifyLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignJustifyLeft: DefineComponent<TextAlignJustifyLeftProps>;

export default TextAlignJustifyLeft;
export { TextAlignJustifyLeft };
