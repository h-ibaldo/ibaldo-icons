import type { DefineComponent } from 'vue';

export interface TextWProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextW: DefineComponent<TextWProps>;

export default TextW;
export { TextW };
