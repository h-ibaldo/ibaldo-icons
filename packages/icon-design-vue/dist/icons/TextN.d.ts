import type { DefineComponent } from 'vue';

export interface TextNProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextN: DefineComponent<TextNProps>;

export default TextN;
export { TextN };
