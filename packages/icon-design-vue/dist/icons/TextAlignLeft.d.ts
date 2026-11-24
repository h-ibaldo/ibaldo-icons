import type { DefineComponent } from 'vue';

export interface TextAlignLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignLeft: DefineComponent<TextAlignLeftProps>;

export default TextAlignLeft;
export { TextAlignLeft };
