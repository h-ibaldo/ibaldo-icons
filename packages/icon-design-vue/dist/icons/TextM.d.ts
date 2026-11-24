import type { DefineComponent } from 'vue';

export interface TextMProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextM: DefineComponent<TextMProps>;

export default TextM;
export { TextM };
