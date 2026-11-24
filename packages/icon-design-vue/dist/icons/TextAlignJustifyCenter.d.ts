import type { DefineComponent } from 'vue';

export interface TextAlignJustifyCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignJustifyCenter: DefineComponent<TextAlignJustifyCenterProps>;

export default TextAlignJustifyCenter;
export { TextAlignJustifyCenter };
