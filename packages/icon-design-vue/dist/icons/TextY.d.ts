import type { DefineComponent } from 'vue';

export interface TextYProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextY: DefineComponent<TextYProps>;

export default TextY;
export { TextY };
