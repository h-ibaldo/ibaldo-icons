import type { DefineComponent } from 'vue';

export interface TextWCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextWCircle: DefineComponent<TextWCircleProps>;

export default TextWCircle;
export { TextWCircle };
