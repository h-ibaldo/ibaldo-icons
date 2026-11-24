import type { DefineComponent } from 'vue';

export interface TextTProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextT: DefineComponent<TextTProps>;

export default TextT;
export { TextT };
