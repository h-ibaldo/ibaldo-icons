import type { DefineComponent } from 'vue';

export interface TextPSquareOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextPSquareOff: DefineComponent<TextPSquareOffProps>;

export default TextPSquareOff;
export { TextPSquareOff };
