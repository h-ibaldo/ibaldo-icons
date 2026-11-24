import type { DefineComponent } from 'vue';

export interface TextHProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextH: DefineComponent<TextHProps>;

export default TextH;
export { TextH };
