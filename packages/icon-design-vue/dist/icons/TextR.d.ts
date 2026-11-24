import type { DefineComponent } from 'vue';

export interface TextRProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextR: DefineComponent<TextRProps>;

export default TextR;
export { TextR };
