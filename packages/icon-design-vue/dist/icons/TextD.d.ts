import type { DefineComponent } from 'vue';

export interface TextDProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextD: DefineComponent<TextDProps>;

export default TextD;
export { TextD };
