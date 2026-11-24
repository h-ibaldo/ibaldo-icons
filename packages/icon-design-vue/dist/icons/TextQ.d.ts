import type { DefineComponent } from 'vue';

export interface TextQProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextQ: DefineComponent<TextQProps>;

export default TextQ;
export { TextQ };
