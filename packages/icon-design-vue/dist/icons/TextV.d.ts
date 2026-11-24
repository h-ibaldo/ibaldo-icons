import type { DefineComponent } from 'vue';

export interface TextVProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextV: DefineComponent<TextVProps>;

export default TextV;
export { TextV };
