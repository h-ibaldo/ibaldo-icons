import type { DefineComponent } from 'vue';

export interface TextEProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextE: DefineComponent<TextEProps>;

export default TextE;
export { TextE };
