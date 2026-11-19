import type { DefineComponent } from 'vue';

export interface TextAlignRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignRight: DefineComponent<TextAlignRightProps>;

export default TextAlignRight;
export { TextAlignRight };
