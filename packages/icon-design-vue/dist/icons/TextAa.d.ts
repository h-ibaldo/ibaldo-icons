import type { DefineComponent } from 'vue';

export interface TextAaProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAa: DefineComponent<TextAaProps>;

export default TextAa;
export { TextAa };
