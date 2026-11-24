import type { DefineComponent } from 'vue';

export interface TextSProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextS: DefineComponent<TextSProps>;

export default TextS;
export { TextS };
