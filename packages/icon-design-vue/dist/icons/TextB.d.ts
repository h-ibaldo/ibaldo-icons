import type { DefineComponent } from 'vue';

export interface TextBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextB: DefineComponent<TextBProps>;

export default TextB;
export { TextB };
