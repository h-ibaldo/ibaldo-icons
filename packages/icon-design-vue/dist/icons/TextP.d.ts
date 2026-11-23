import type { DefineComponent } from 'vue';

export interface TextPProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextP: DefineComponent<TextPProps>;

export default TextP;
export { TextP };
