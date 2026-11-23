import type { DefineComponent } from 'vue';

export interface TextLetterSpacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextLetterSpacing: DefineComponent<TextLetterSpacingProps>;

export default TextLetterSpacing;
export { TextLetterSpacing };
